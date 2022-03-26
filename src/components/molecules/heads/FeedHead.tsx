import Head from "next/head";
import { adsense } from "../../../configs/adsense";
import { meta } from "../../../configs/meta";

export function FeedHead() {
  return (
    <Head>
      <title>Feed | Social-dev</title>
      <meta name="title" content={meta.feed.title}/>
      <meta name="description" content={meta.feed.content} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}`}/>
      <meta property="og:title" content={meta.feed.title}/>
      <meta property="og:description" content={meta.feed.content}/>
      <meta property="og:image" content={meta.feed.image}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_APP_URL}`}/>
      <meta property="twitter:title" content={meta.feed.title}/>
      <meta property="twitter:description" content={meta.feed.content}/>
      <meta property="twitter:image" content={meta.feed.image}/>

      {/* Adsense */}
      <script async src={adsense.script} crossOrigin="anonymous"></script>
    </Head>
  );
}