import { useEffect } from "react";
import { useRouter } from "next/router";
import { CentralizedContainer } from "../components/atoms/centralized-container";
import { useAuth } from "../states/hooks/use-auth";
import Head from "next/head";
import { LoginOptions } from "../components/molecules/login-options";

export default function Login() {
  const router = useRouter();
  const { data } = useAuth();

  useEffect(() => {
    if (!data) return;

    router.push('/')
  }, [router, data]);

  return (
    <>
      <Head>
        <title>Login | rbjr blog</title>
      </Head>,
      <CentralizedContainer>
       <LoginOptions />
      </CentralizedContainer>
    </>
  );
}