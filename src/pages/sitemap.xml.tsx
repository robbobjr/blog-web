import { appConfig } from "../configs/app-config";
import { AxiosAPI } from "../services/api/axios";
import { PostDto, PostTagDto } from "../services/api/openapi";

function generateSiteMap(posts: PostDto[], tags: PostTagDto[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${appConfig.baseURL}/post/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
      ${tags
      .map(({ name }) => {
        return `
      <url>
          <loc>${`${appConfig.baseURL}/${name}`}</loc>
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
  const client = new AxiosAPI("SiteMap:getServerSideProps"); 
  const { posts, tags } = await client.getPostsAndTags({});

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts, tags);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;