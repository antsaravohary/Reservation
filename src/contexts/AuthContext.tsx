import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { API } from "../Constants";

export interface User {
  idUser: number;
  name: string;
  prenom: string;
  adresse: string;
  email: string;
  billet: null | number[];
  role: string;
}

export const AuthContext = createContext<{
  login: (email: string, password: string) => Promise<null | string>;
  logout: () => void;
  user: null | User;
}>({
  login: () => Promise.resolve(null),
  logout: () => {},
  user: null,
});

export const AuthContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const _user = localStorage.getItem("user");

    if (_user) {
      setUser(JSON.parse(_user)._user);
    }
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<null | string> => {
    // Atao axios

    console.log({
      email,
      password,
    });

    const response = await axios.post(`${API}/utilisateur/login`, {
      email,
      password,
    });

    if (response.data) {
      const _user = response.data as User;

      setUser(_user);

      localStorage.setItem(
        "user",
        JSON.stringify({
          _user,
        })
      );

      return Promise.resolve(_user.role);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");

      return Promise.resolve(null);
    }
  };

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
