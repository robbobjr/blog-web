import { Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { useAuth } from "../../../states/hooks/use-auth";
import { Link } from "../../atoms/link";

type CookieProps = {
};

export function Cookie({}: CookieProps) {
  const { data } = useAuth();

  const link = useMemo(() => {
    if (data?.user?.github) {
      const splited = data.user.github.split('/');
      const nick = splited[splited.length - 1];
      return 'https://buymeacookie.rbjr.dev?github=' +  nick;
    }
    
    return 'https://buymeacookie.rbjr.dev'
  },[data]); 

  return (
    <Link href={link} target="_blank">
      <Image 
        src="/static/cookie.png" 
        opacity="0.4" 
        alt="cookie" 
        width="20"
        transition="0.2s"
        _hover={{
          opacity: "1"
        }}
      />
    </Link>
  );
}