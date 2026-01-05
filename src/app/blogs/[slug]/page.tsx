
import SingleBlogClient from "./SingleBlogClient";

const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";

// This function is required for static export
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_URL}?per_page=100`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const posts = await response.json();
    return posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

export default function SingleBlogPage() {
  return <SingleBlogClient />;
}
