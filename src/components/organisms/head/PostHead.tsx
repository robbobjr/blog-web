import Head from "next/head";
import { adsense } from "../../../configs/adsense";

export function PostHead({ post }) {
  return (
    <Head>
      <title>{post.title}</title>
      <meta name="title" content={post.title}/>
      <meta name="description" content={post.content} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/${post.id}`}/>
      <meta property="og:title" content={post.title}/>
      <meta property="og:description" content={post.content}/>
      <meta property="og:image" content={post?.image}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/${post.id}`}/>
      <meta property="twitter:title" content={post.title}/>
      <meta property="twitter:description" content={post.content}/>
      <meta property="twitter:image" content={post?.image}/>

      {/* Adsense */}
      <script async src={adsense.script} crossOrigin="anonymous"></script>
    </Head>
  );
}