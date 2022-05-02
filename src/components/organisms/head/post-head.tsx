import Head from "next/head";

export function PostHead({ data }) {
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="title" content={data.title}/>
      <meta name="description" content={data.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/${data.id}`}/>
      <meta property="og:title" content={data.title}/>
      <meta property="og:description" content={data.description}/>
      <meta property="og:image" content={data?.image}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/${data.id}`}/>
      <meta property="twitter:title" content={data.title}/>
      <meta property="twitter:description" content={data.description}/>
      <meta property="twitter:image" content={data?.image}/>
    </Head>
  );
}