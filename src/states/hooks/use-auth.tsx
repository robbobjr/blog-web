import { useSession } from "next-auth/react";
import { UserDto } from "../../services/openapi";

export type CustomSession = {
  data?: {
    user: UserDto;
  }
}

export function userAuth(): CustomSession {
  const data = useSession() as CustomSession;

  return data;
}