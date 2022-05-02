import { useSession } from "next-auth/react";
import { UserDto } from "../../services/api/openapi";

export type CustomSessionContext = {
  data?: {
    user: UserDto;
  }
}

export function useAuth(): CustomSessionContext {
  const data = useSession();

  return data as CustomSessionContext;
}