/* eslint-disable @next/next/no-img-element */
import { Image } from '@chakra-ui/react';
import Head from 'next/head';
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <main className={styles.contentContainer}>
        <Image width="25%" src="/static/me.gif" alt="404" />
        <section className={styles.hero}>
          <h1>
            40<span>4</span>
          </h1>
        </section>
      </main>
    </>
  );
}
