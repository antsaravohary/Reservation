import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export interface User {
  idUser: number;
  name: string;
  prenom: string;
  adresse: string;
  email: string;
  billet: null | number[];
}

export const AuthContext = createContext<{
  login: (email: string, password: string) => boolean;
  logout: () => void;
  user: null | User;
}>({
  login: () => false,
  logout: () => {},
  user: null,
});

export const AuthContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const _user = localStorage.getItem("user");

    if (_user) setUser(JSON.parse(_user));
  }, []);

  function login(email: string, password: string) {
    // Atao axios

    console.log({
      email,
      password,
    });

    const _user = {
      idUser: 1,
      name: "Test",
      email,
      adresse: "Test",
      prenom: "Test",
      billet: null,
    };

    setUser(_user);

    localStorage.setItem(
      "user",
      JSON.stringify({
        _user,
      })
    );

    return true;
  }

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
