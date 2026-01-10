// "use client";

// import { useEffect, useState } from "react";
// import { useParams, notFound } from "next/navigation";
// import Container from "../../components/Container";
// import Image from "next/image";
// import styles from "./page.module.css";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface WordPressPost {
//   id: number;
//   title: { rendered: string };
//   content: { rendered: string };
//   date: string;
//   slug: string;
//   featured_media: number;
//   _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
//   meta?: { 
//     _reading_time?: string; 
//     _faqs_data?: FAQItem[];
//     sa_ads?: Array<{
//       imageId: number;
//       imageUrl: string;
//       link: string;
//     }>;
//   };
// }

// interface TOCItem {
//   id: string;
//   text: string;
//   level: number;
// }

// interface Ad {
//   id: number;
//   image: string;
//   link: string;
// }

// const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";

// const stripHtml = (html: string) =>
//   html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");

// const formatReadingTime = (readingTime?: string) =>
//   readingTime?.trim() ? readingTime : "";

// const extractHeadings = (html: string): TOCItem[] => {
//   const regex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
//   const headings: TOCItem[] = [];
//   let match;
//   while ((match = regex.exec(html))) {
//     const level = parseInt(match[1]);
//     const text = stripHtml(match[2]).trim();
//     if (text) headings.push({ id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"), text, level });
//   }
//   return headings;
// };

// const addHeadingIds = (html: string, headings: TOCItem[]) => {
//   let modified = html;
//   headings.forEach((h) => {
//     const regex = new RegExp(`<h${h.level}([^>]*)>${h.text}</h${h.level}>`, "i");
//     modified = modified.replace(
//       regex,
//       `<h${h.level}$1 id="${h.id}" class="blog-heading">${h.text}</h${h.level}>`
//     );
//   });
//   return modified;
// };

// export default function SingleBlogClient() {
//   const { slug } = useParams<{ slug: string }>();
//   const [post, setPost] = useState<WordPressPost | null>(null);
//   const [headings, setHeadings] = useState<TOCItem[]>([]);
//   const [content, setContent] = useState("");
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [ads, setAds] = useState<Ad[]>([]);

//   useEffect(() => {
//     if (!slug) return;
//     const fetchPost = async () => {
//       try {
//         const res = await fetch(`${API_URL}?slug=${slug}&_embed=wp:featuredmedia`, { cache: "no-store" });
//         const data: WordPressPost[] = await res.json();
//         if (!data?.length) return setPost(null);
//         const p = data[0];
//         let h = extractHeadings(p.content.rendered);
//         // Filter to only show h1 and h2 headings (remove inner headings)
//         h = h.filter((heading) => heading.level <= 2);
//         if (p.meta?._faqs_data?.length) h.push({ id: "faqs", text: "FAQs", level: 2 });
//         setHeadings(h);
//         setContent(addHeadingIds(p.content.rendered, h));
//         setPost(p);

//         // Extract ads from post - check multiple possible locations
//         let saAdsData = null;
        
//         // Check in meta field
//         if ((p as any).meta?.sa_ads && Array.isArray((p as any).meta.sa_ads)) {
//           saAdsData = (p as any).meta.sa_ads;
//         }
//         // Check in acf (Advanced Custom Fields)
//         else if ((p as any).acf?.sa_ads && Array.isArray((p as any).acf.sa_ads)) {
//           saAdsData = (p as any).acf.sa_ads;
//         }
//         // Check directly in post object
//         else if ((p as any).sa_ads && Array.isArray((p as any).sa_ads)) {
//           saAdsData = (p as any).sa_ads;
//         }

//         if (saAdsData) {
//           const formattedAds = saAdsData
//             .filter((ad: any) => ad && ad.imageUrl && ad.imageUrl.trim() !== "")
//             .map((ad: any) => ({
//               id: ad.imageId || 0,
//               image: ad.imageUrl || "",
//               link: ad.link || "#",
//             }));
//           setAds(formattedAds);
//           console.log("Ads loaded:", formattedAds);
//         } else {
//           console.log("No ads found in post data. Available keys:", Object.keys(p));
//           console.log("Post meta:", (p as any).meta);
//         }
//       } catch {
//         setPost(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPost();
//   }, [slug]);

//   if (loading) {
//     return (
//       <section className={`sectionPadding ${styles.blogSection}`}>
//         <Container maxWidth="xl">
//           <div className={styles.blogContainer}>
//             {/* TOC Skeleton */}
//             <aside className={styles.sidebar}>
//               <div className={styles.tocContainer}>
//                 <div className={`${styles.skeleton} ${styles.skeletonTocTitle}`}></div>
//                 <div className="space-y-3">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <div key={i} className={`${styles.skeleton} ${styles.skeletonTocItem}`}></div>
//                   ))}
//                 </div>
//               </div>
//             </aside>

//             {/* Content Skeleton */}
//             <article className={styles.contentArea}>
//               <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
//               <div className={`${styles.skeleton} ${styles.skeletonMeta}`}></div>
//               <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
//               <div className="mt-6 space-y-3">
//                 <div className={`${styles.skeleton} ${styles.skeletonContent}`}></div>
//                 <div className={`${styles.skeleton} ${styles.skeletonContent}`}></div>
//                 <div className={`${styles.skeleton} ${styles.skeletonContentShort}`}></div>
//                 <div className={`${styles.skeleton} ${styles.skeletonContent}`}></div>
//                 <div className={`${styles.skeleton} ${styles.skeletonContent}`}></div>
//               </div>
//             </article>
//           </div>
//         </Container>
//       </section>
//     );
//   }
//   if (!post) notFound();

//   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   // Helper function to format date
//   const formatDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const hasThirdAd = ads[2] && ads[2].image;

//   return (
//     <section className={`sectionPadding ${styles.blogSection}`}>
//       <Container maxWidth="xl">
//         <div className={`${styles.blogContainer} ${hasThirdAd ? styles.threeColumns : styles.twoColumns}`}>
//           {/* LEFT COLUMN - TOC */}
//           <aside className={styles.sidebar}>
//             <div className={styles.tocContainer}>
//               <h3 className={styles.tocTitle}>Table of Contents</h3>
//               <ul className={styles.tocList}>
//                 {headings.map((h, index) => {
//                   let displayText = h.text;
                  
//                   // Only add number to FAQs based on last heading's number
//                   if (h.id === "faqs") {
//                     // Find the last heading before FAQs
//                     const previousHeadings = headings.slice(0, index);
//                     if (previousHeadings.length > 0) {
//                       const lastHeading = previousHeadings[previousHeadings.length - 1];
//                       // Extract number from last heading text (format: "X. Title" or "X. Y. Title")
//                       const numberMatch = lastHeading.text.match(/^(\d+)\./);
//                       if (numberMatch) {
//                         const lastNumber = parseInt(numberMatch[1]);
//                         displayText = `${lastNumber + 1}. ${h.text}`;
//                       } else {
//                         // If no number found, start from 1
//                         displayText = `1. ${h.text}`;
//                       }
//                     } else {
//                       // If FAQs is the first heading, start from 1
//                       displayText = `1. ${h.text}`;
//                     }
//                   }
                  
//                   return (
//                     <li key={h.id} className={`${styles.tocItem} ${styles[`level${h.level}`]}`}>
//                       <a
//                         href={`#${h.id}`}
//                         className={styles.tocLink}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           const element = document.getElementById(h.id);
//                           if (element) {
//                             const offset = 100; // Offset for sticky header (matches CSS scroll-margin-top)
//                             const elementPosition = element.getBoundingClientRect().top;
//                             const offsetPosition = elementPosition + window.pageYOffset - offset;
//                             window.scrollTo({
//                               top: offsetPosition,
//                               behavior: "smooth",
//                             });
//                           }
//                         }}
//                       >
//                         {displayText}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
            
//             {/* First Ad - Below TOC */}
//             {ads[0] && (
//               <div className={styles.adContainer}>
//                 <a href={ads[0].link} target="_blank" rel="noopener noreferrer" className={styles.adLink}>
//                   <Image
//                     src={ads[0].image}
//                     alt="Advertisement"
//                     width={300}
//                     height={600}
//                     className={styles.adImage}
//                   />
//                 </a>
//               </div>
//             )}
//           </aside>

//           {/* CENTER COLUMN - CONTENT */}
//           <article className={styles.contentArea}>
//             {/* Second Ad - Above Title */}
//             {ads[1] && (
//               <div className={styles.adBanner}>
//                 <a href={ads[1].link} target="_blank" rel="noopener noreferrer" className={styles.adLink}>
//                   <Image
//                     src={ads[1].image}
//                     alt="Advertisement"
//                     width={728}
//                     height={90}
//                     className={styles.adBannerImage}
//                   />
//                 </a>
//               </div>
//             )}

//             <h1 className={styles.blogTitle}>{stripHtml(post.title.rendered)}</h1>

//             {/* ===== BLOG META ===== */}
//             {/* Date and Meta */}
//             <div className={styles.blogMeta}>
//               <span className={styles.metadataItem}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={styles.metaIcon}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>{formatDate(post.date)}</span>
//               </span>
//               {(() => {
//                 const readingTime = post.meta?._reading_time || (post as any)._reading_time;
//                 const formatted = formatReadingTime(readingTime);
//                 return formatted ? (
//                   <>
//                     <span>•</span>
//                     <span className={styles.metadataItem}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={styles.metaIcon}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       <span>{formatted}</span>
//                     </span>
//                   </>
//                 ) : null;
//               })()}
//             </div>


//             {featuredImage && (
//               <Image
//                 src={featuredImage}
//                 width={1200}
//                 height={600}
//                 alt=""
//                 className={styles.featuredImage}
//                 priority
//               />
//             )}

//             <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: content }} />

//             {/* ===== FAQs ===== */}
//             {post.meta?._faqs_data?.length && (
//               <section id="faqs" className="mt-10">
//                 <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
//                 <div className="space-y-4">
//                   {post.meta._faqs_data.map((faq, i) => (
//                     <div key={i} className="border border-white/20 rounded-lg overflow-hidden">
//                       <button
//                         onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                         className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold bg-white/5 hover:bg-white/10 transition-colors duration-200"
//                       >
//                         <span className="pr-4">{faq.question}</span>
//                         <svg
//                           className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
//                             openFaq === i ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       <div
//                         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                           openFaq === i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         <div
//                           className="px-6 py-4 text-white/90 bg-white/5"
//                           dangerouslySetInnerHTML={{ __html: faq.answer }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </article>

//           {/* RIGHT COLUMN - THIRD AD */}
//           {hasThirdAd && (
//             <aside className={styles.rightSidebar}>
//               <div className={styles.adContainer}>
//                 <a href={ads[2].link} target="_blank" rel="noopener noreferrer" className={styles.adLink}>
//                   <img
//                     src={ads[2].image}
//                     alt="Advertisement"
//                     className={styles.adImage}
//                   />
//                 </a>
//               </div>
//             </aside>
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// }

