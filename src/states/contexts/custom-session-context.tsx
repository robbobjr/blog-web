import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import { UserDto } from "../../services/api/openapi";

export interface CustomSessionContextProps {
  data?: {
    user: UserDto;
  }
  setSession(data: { user: UserDto }): void;
}

export const CustomSessionContext = createContext({} as CustomSessionContextProps);

export function CustomSessionProvider({ children }) {
  const { data } = useSession() as Pick<CustomSessionContextProps, 'data'>;
  const [session, setSession] = useState(data);

  useEffect(() => {
    setSession(data);
  }, [data]);

  return (
    <CustomSessionContext.Provider value={{ data: session, setSession }}>
      {children}
    </CustomSessionContext.Provider>
  );
}