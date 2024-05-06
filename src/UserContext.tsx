import axios from "axios";
import { createContext, useState, ReactNode, useEffect } from "react";

interface UserContextType {
  user: any; // replace 'any' with the type of your user
  setUser: (user: any) => void; // replace 'any' with the type of your user
}

const UserContext = createContext<UserContextType>(null as any);

interface UserProviderProps {
  children: ReactNode;
}

export default function UserContextProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<null | { [key: string]: any }>(null); // replace with your user type

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then((res) => {
        setUser(res.data);
      });
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
