import Head from "next/head";
import { metaConfig } from "../../../configs/meta";

export function FeedHead() {
  return (
    <Head>
      <title>Feed | Social-dev</title>
      <meta name="title" content={metaConfig.feed.title}/>
      <meta name="description" content={metaConfig.feed.content} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}`}/>
      <meta property="og:title" content={metaConfig.feed.title}/>
      <meta property="og:description" content={metaConfig.feed.content}/>
      <meta property="og:image" content={metaConfig.feed.image}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_APP_URL}`}/>
      <meta property="twitter:title" content={metaConfig.feed.title}/>
      <meta property="twitter:description" content={metaConfig.feed.content}/>
      <meta property="twitter:image" content={metaConfig.feed.image}/>
    </Head>
  );
}