import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface User {
  name: string;
  avatar: string;
  id: number;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface ContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User;
  signIn(credentials?: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      const token = await AsyncStorage.getItem('@Labbeer:token');
      const user = await AsyncStorage.getItem('@Labbeer:user');

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }
    }
    loadStoredData();
  }, []);

  const signIn = useCallback(async () => {
    // const response = await api.get(`/customers?email=${email}`);
    const response = await api.get(
      `/customers?email=Karla_Carvalho36@live.com`,
    );
    if (response.status === 200 && response.data.length) {
      const user = response.data[0];
      await AsyncStorage.setItem('@Labbeer:token', 'token');
      await AsyncStorage.setItem('@Labbeer:user', JSON.stringify(user));

      setData({ token: 'token', user });
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Labbeer:token', '@Labbeer:user']);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): ContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useWorkflow must be used within AuthProvider');
  }

  return context;
}
