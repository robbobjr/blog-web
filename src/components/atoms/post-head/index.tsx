import Head from "next/head";
import { appConfig } from "../../../configs/app-config";
import { metaConfig } from "../../../configs/meta-config";

export function PostHead({ data }) {
  return (
    <Head>
      <title>{data.title} | rbjr blog</title>
      <meta name="title" content={data.title}/>
      <meta name="description" content={data.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${appConfig.baseURL}/post/${data.slug}`}/>
      <meta property="og:title" content={data.title}/>
      <meta property="og:description" content={data.description}/>
      <meta property="og:image" content={data?.image || metaConfig.feed.image}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${appConfig.baseURL}/post/${data.slug}`}/>
      <meta property="twitter:title" content={data.title}/>
      <meta property="twitter:description" content={data.description}/>
      <meta property="twitter:image" content={data?.image || metaConfig.feed.image}/>
    </Head>
  );
}