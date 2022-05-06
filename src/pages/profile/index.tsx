/* eslint-disable @next/next/no-img-element */
import { Image } from '@chakra-ui/react';
import Head from 'next/head';
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
        <meta name="description" content="Home page from Explorer" />
      </Head>
      <main className={styles.contentContainer}>
      <Image width="25%" src="/static/me.gif" alt="girl coding" />
        <section className={styles.hero}>
          <span>👏 Hey there!</span>
          <h1>
            Wellcome to my <span>portfolio</span>
          </h1>
          <p>
            Feel free to get in touch <br />
            <span>robertojuniordev@gmail.com</span>
          </p>
        </section>
      </main>
    </>
  );
}
