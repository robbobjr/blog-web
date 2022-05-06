import { useContext } from "react";
import { CustomSessionContext, CustomSessionContextProps } from "../contexts/custom-session-context";

export function useAuth(): CustomSessionContextProps {
  const data = useContext(CustomSessionContext);

  return data as CustomSessionContextProps;
}