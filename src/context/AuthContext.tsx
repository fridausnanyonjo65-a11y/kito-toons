import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../firebase';
import { FavoriteItem, Movie, UserProfile, WatchHistoryItem } from '../types';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  favorites: FavoriteItem[];
  watchHistory: WatchHistoryItem[];
  isFavorite: (movieId: string) => boolean;
  toggleFavorite: (movie: Movie) => Promise<void>;
  recordWatchProgress: (movie: Movie, progressPercentage: number) => Promise<void>;
  signUpWithEmail: (name: string, email: string, pass: string) => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  sendResetEmail: (email: string) => Promise<void>;
  logOut: () => Promise<void>;
  updateUserProfileData: (data: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [watchHistory, setWatchHistory] = useState<WatchHistoryItem[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Fetch or create user profile in Firestore
        const userRef = doc(db, 'users', user.uid);
        try {
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserProfile(userSnap.data() as UserProfile);
          } else {
            const newProfile: UserProfile = {
              uid: user.uid,
              email: user.email || '',
              displayName: user.displayName || user.email?.split('@')[0] || 'Cartoon Explorer',
              photoURL: user.photoURL || '/src/assets/images/kito_mascot_avatar_1793709129479.jpg',
              bio: 'Animation movie fanatic & cartoon enthusiast at Kito’s Toons!',
              favoriteCategory: 'Adventure',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            };
            await setDoc(userRef, newProfile);
            setUserProfile(newProfile);
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      } else {
        setUserProfile(null);
        setFavorites([]);
        setWatchHistory([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to user favorites and history
  useEffect(() => {
    if (!currentUser) return;

    const favoritesRef = collection(db, 'users', currentUser.uid, 'favorites');
    const unsubFavorites = onSnapshot(
      favoritesRef,
      (snap) => {
        const favs: FavoriteItem[] = [];
        snap.forEach((docSnap) => {
          favs.push(docSnap.data() as FavoriteItem);
        });
        setFavorites(favs);
      },
      (err) => {
        handleFirestoreError(err, OperationType.LIST, `users/${currentUser.uid}/favorites`);
      }
    );

    const historyRef = collection(db, 'users', currentUser.uid, 'history');
    const unsubHistory = onSnapshot(
      historyRef,
      (snap) => {
        const hist: WatchHistoryItem[] = [];
        snap.forEach((docSnap) => {
          hist.push(docSnap.data() as WatchHistoryItem);
        });
        // sort by watchedAt desc
        hist.sort((a, b) => new Date(b.watchedAt).getTime() - new Date(a.watchedAt).getTime());
        setWatchHistory(hist);
      },
      (err) => {
        handleFirestoreError(err, OperationType.LIST, `users/${currentUser.uid}/history`);
      }
    );

    return () => {
      unsubFavorites();
      unsubHistory();
    };
  }, [currentUser]);

  const isFavorite = (movieId: string) => {
    return favorites.some((f) => f.movieId === movieId);
  };

  const toggleFavorite = async (movie: Movie) => {
    if (!currentUser) {
      throw new Error('Please sign in to save movies to your favorites!');
    }
    const favPath = `users/${currentUser.uid}/favorites`;
    const docRef = doc(db, 'users', currentUser.uid, 'favorites', movie.id);
    try {
      if (isFavorite(movie.id)) {
        await deleteDoc(docRef);
      } else {
        const newFav: FavoriteItem = {
          id: movie.id,
          userId: currentUser.uid,
          movieId: movie.id,
          movieTitle: movie.title,
          moviePoster: movie.posterUrl,
          movieCategory: movie.category,
          addedAt: new Date().toISOString(),
        };
        await setDoc(docRef, newFav);
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, favPath);
    }
  };

  const recordWatchProgress = async (movie: Movie, progressPercentage: number) => {
    if (!currentUser) return;
    const historyPath = `users/${currentUser.uid}/history`;
    const docRef = doc(db, 'users', currentUser.uid, 'history', movie.id);
    try {
      const historyItem: WatchHistoryItem = {
        id: movie.id,
        userId: currentUser.uid,
        movieId: movie.id,
        movieTitle: movie.title,
        moviePoster: movie.posterUrl,
        movieCategory: movie.category,
        watchedAt: new Date().toISOString(),
        progressPercentage: Math.round(progressPercentage),
      };
      await setDoc(docRef, historyItem);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, historyPath);
    }
  };

  const signUpWithEmail = async (name: string, email: string, pass: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, {
      displayName: name,
      photoURL: '/src/assets/images/kito_mascot_avatar_1793709129479.jpg',
    });
    const newProfile: UserProfile = {
      uid: cred.user.uid,
      email: cred.user.email || email,
      displayName: name,
      photoURL: '/src/assets/images/kito_mascot_avatar_1793709129479.jpg',
      bio: 'Ready for animated adventures on Kito’s Toons!',
      favoriteCategory: 'Adventure',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    try {
      await setDoc(doc(db, 'users', cred.user.uid), newProfile);
      setUserProfile(newProfile);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `users/${cred.user.uid}`);
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userRef = doc(db, 'users', user.uid);
    const snap = await getDoc(userRef);
    if (!snap.exists()) {
      const newProfile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Cartoon Explorer',
        photoURL: user.photoURL || '/src/assets/images/kito_mascot_avatar_1793709129479.jpg',
        bio: 'Explorer of animation stories at Kito’s Toons!',
        favoriteCategory: 'Adventure',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await setDoc(userRef, newProfile);
      setUserProfile(newProfile);
    }
  };

  const sendResetEmail = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const updateUserProfileData = async (data: Partial<UserProfile>) => {
    if (!currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    try {
      const updated = {
        ...data,
        updatedAt: new Date().toISOString(),
      };
      await updateDoc(userRef, updated);
      setUserProfile((prev) => (prev ? { ...prev, ...updated } : null));
      if (data.displayName) {
        await updateProfile(currentUser, { displayName: data.displayName });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${currentUser.uid}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        favorites,
        watchHistory,
        isFavorite,
        toggleFavorite,
        recordWatchProgress,
        signUpWithEmail,
        signInWithEmail,
        signInWithGoogle,
        sendResetEmail,
        logOut,
        updateUserProfileData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
