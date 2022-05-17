import { appConfig } from "../configs/app-config";
import { Api } from "../services/api";
import { PostDto } from "../services/api/openapi";

function generateSiteMap(posts: PostDto[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${`${appConfig.baseURL}/portfolio`}</loc>
    </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${appConfig.baseURL}/post/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const client = new Api("SiteMap::getServerSideProps"); 
  const posts = await client.getPosts();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;