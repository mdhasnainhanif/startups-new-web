// const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(`${API_URL}?per_page=100`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       return [];
//     }

//     const posts = await response.json();
    
//     if (!Array.isArray(posts) || posts.length === 0) {
//       return [];
//     }

//     return posts.map((post: { slug: string }) => ({
//       slug: post.slug,
//     }));
//   } catch (error) {
//     console.error("Error fetching blog slugs:", error);
//     return [];
//   }
// }

// import SingleBlogClient from "./SingleBlogClient";

// export default function SingleBlogPage() {
//   return <SingleBlogClient />;
// }

// Temporary placeholder to satisfy Next.js
export default function SingleBlogPage() {
  return <div>Blog page temporarily disabled</div>;
}
