'use client';
import { useState, useRef, useEffect } from 'react';
import styles from '../../components/ProvenSuccess/ProvenSuccess.module.css';
import Container from '../../components/Container';
interface TabData {
  id: string;
  label: string;
  images: string[];
  gridItems: Array<{
    id: string;
    label: string;
    icon?: string;
  }>;
}
interface ProvenSuccessData {
  headline: {
    text: string;
    highlighted: string;
  };
  description: string;
  tabs: TabData[];
}
interface PortfolioImage {
  normal: string;
  zoom: string;
}
const WEB_DEV_PORTFOLIO: PortfolioImage[] = [
  {
    normal: '/assets/images/portfolio/web-dev/1/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/1/website.webp',
  },
  {
    normal: '/assets/images/portfolio/web-dev/2/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/2/website.webp',
  },
  {
    normal: '/assets/images/portfolio/web-dev/3/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/3/website.webp',
  },
  {
    normal: '/assets/images/portfolio/web-dev/4/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/4/website.webp',
  },
  {
    normal: '/assets/images/portfolio/web-dev/5/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/5/website.webp',
  },
  {
    normal: '/assets/images/portfolio/web-dev/6/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/6/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/7/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/7/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/8/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/8/website.jpg',
  },
];
const PROVEN_SUCCESS_DATA: ProvenSuccessData = {
  headline: {
    text: 'Proven Success in Every Project',
    highlighted: 'Success',
  },
  description:
    'Your Smart AI Business Team brings a fully loaded AI ecosystem for creative design and analytics automation — premium tools, no extra cost, no hassle.',
  tabs: [
    {
      id: 'branding-kit',
      label: 'Branding Kit',
      images: [
        '/assets/images/portfolio/branding-kit/1.jpg',
        '/assets/images/portfolio/branding-kit/2.jpg',
        '/assets/images/portfolio/branding-kit/3.jpg',
        '/assets/images/portfolio/branding-kit/4.jpg',
        '/assets/images/portfolio/branding-kit/5.jpg',
        '/assets/images/portfolio/branding-kit/6.jpg',
        '/assets/images/portfolio/branding-kit/7.jpg',
        '/assets/images/portfolio/branding-kit/8.jpg',
        '/assets/images/portfolio/branding-kit/9.jpg',
        '/assets/images/portfolio/branding-kit/10.jpg',
      ],
      gridItems: [
        { id: '1', label: 'Logo Design' },
        { id: '2', label: 'Brand Identity' },
        { id: '3', label: 'Business Cards' },
        { id: '4', label: 'Letterhead' },
        { id: '5', label: 'Envelope' },
        { id: '6', label: 'Email Signature' },
        { id: '7', label: 'Social Media Kit' },
        { id: '8', label: 'Brand Guidelines' },
        { id: '9', label: 'Color Palette' },
        { id: '10', label: 'Typography' },
        { id: '11', label: 'Icon Set' },
        { id: '12', label: 'Pattern Design' },
        { id: '13', label: 'Stationery Set' },
        { id: '14', label: 'Packaging Design' },
        { id: '15', label: 'Merchandise' },
        { id: '16', label: 'Brand Book' },
        { id: '17', label: 'Logo Variations' },
        { id: '18', label: 'Favicon Set' },
        { id: '19', label: 'Watermark' },
        { id: '20', label: 'Brand Assets' },
        { id: '21', label: 'Templates' },
        { id: '22', label: 'Mockups' },
        { id: '23', label: 'Presentation' },
        { id: '24', label: 'Documentation' },
      ],
    },
    {
      id: 'logo-design',
      label: 'Logo Design',
      images: [
        '/assets/images/portfolio/logo-design/1.jpg',
        '/assets/images/portfolio/logo-design/2.jpg',
        '/assets/images/portfolio/logo-design/3.jpg',
        '/assets/images/portfolio/logo-design/4.jpg',
        '/assets/images/portfolio/logo-design/5.jpg',
        '/assets/images/portfolio/logo-design/6.jpg',
        '/assets/images/portfolio/logo-design/7.jpg',
        '/assets/images/portfolio/logo-design/8.jpg',
        '/assets/images/portfolio/logo-design/9.jpg',
        '/assets/images/portfolio/logo-design/10.jpg',
        '/assets/images/portfolio/logo-design/11.jpg',
        '/assets/images/portfolio/logo-design/12.jpg',
        '/assets/images/portfolio/logo-design/13.jpg',
        '/assets/images/portfolio/logo-design/14.jpg',
        '/assets/images/portfolio/logo-design/15.jpg',
        '/assets/images/portfolio/logo-design/16.jpg',
        '/assets/images/portfolio/logo-design/17.jpg',
        '/assets/images/portfolio/logo-design/18.jpg',
        '/assets/images/portfolio/logo-design/19.jpg',
        '/assets/images/portfolio/logo-design/20.jpg',
        '/assets/images/portfolio/logo-design/21.jpg',
        '/assets/images/portfolio/logo-design/22.jpg',
        '/assets/images/portfolio/logo-design/23.jpg',
        '/assets/images/portfolio/logo-design/24.jpg',
        '/assets/images/portfolio/logo-design/25.jpg',
        '/assets/images/portfolio/logo-design/26.jpg',
        '/assets/images/portfolio/logo-design/27.jpg',
        '/assets/images/portfolio/logo-design/28.jpg',
        '/assets/images/portfolio/logo-design/29.jpg',
        '/assets/images/portfolio/logo-design/30.jpg',
      ],
      gridItems: [
        { id: '1', label: 'Primary Logo' },
        { id: '2', label: 'Secondary Logo' },
        { id: '3', label: 'Icon Logo' },
        { id: '4', label: 'Wordmark' },
        { id: '5', label: 'Symbol' },
        { id: '6', label: 'Monogram' },
        { id: '7', label: 'Logo Variations' },
        { id: '8', label: 'Color Versions' },
        { id: '9', label: 'Black & White' },
        { id: '10', label: 'Horizontal' },
        { id: '11', label: 'Vertical' },
        { id: '12', label: 'Square' },
        { id: '13', label: 'Favicon' },
        { id: '14', label: 'App Icon' },
        { id: '15', label: 'Social Media' },
        { id: '16', label: 'Print Ready' },
        { id: '17', label: 'Web Ready' },
        { id: '18', label: 'Vector Files' },
        { id: '19', label: 'Raster Files' },
        { id: '20', label: 'Logo Guidelines' },
        { id: '21', label: 'Usage Rules' },
        { id: '22', label: 'Spacing Guide' },
        { id: '23', label: 'Size Variations' },
        { id: '24', label: 'File Formats' },
      ],
    },
    {
      id: 'social-media-post',
      label: 'Portal',
      images: [
        '/assets/images/portfolio/portal/1.webp',
        '/assets/images/portfolio/portal/2.webp',
        '/assets/images/portfolio/portal/3.webp',
        '/assets/images/portfolio/portal/4.webp',
        '/assets/images/portfolio/portal/5.webp',
        '/assets/images/portfolio/portal/6.webp',
        '/assets/images/portfolio/portal/7.webp',
        '/assets/images/portfolio/portal/8.webp',
      ],
      gridItems: [
        { id: '1', label: 'Facebook Post' },
        { id: '2', label: 'Instagram Post' },
        { id: '3', label: 'Twitter Post' },
        { id: '4', label: 'LinkedIn Post' },
        { id: '5', label: 'Story Design' },
        { id: '6', label: 'Reel Cover' },
        { id: '7', label: 'Carousel' },
        { id: '8', label: 'Banner' },
        { id: '9', label: 'Cover Photo' },
        { id: '10', label: 'Profile Picture' },
        { id: '11', label: 'Highlight Cover' },
        { id: '12', label: 'Pinterest Pin' },
        { id: '13', label: 'YouTube Thumbnail' },
        { id: '14', label: 'TikTok Cover' },
        { id: '15', label: 'Snapchat Filter' },
        { id: '16', label: 'WhatsApp Status' },
        { id: '17', label: 'Template Set' },
        { id: '18', label: 'Quote Card' },
        { id: '19', label: 'Infographic' },
        { id: '20', label: 'Announcement' },
        { id: '21', label: 'Event Poster' },
        { id: '22', label: 'Promotion' },
        { id: '23', label: 'Testimonial' },
        { id: '24', label: 'Case Study' },
      ],
    },
  ],
};
interface ProvenSuccessProps {
  data?: ProvenSuccessData;
  variant?: string;
}
const ImageLightbox = ({ 
  isOpen, 
  onClose, 
  imageUrl,
  isWebDevelopment = false
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageUrl: string | null;
  isWebDevelopment?: boolean;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  if (!isOpen || !imageUrl) return null;
  return (
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className={styles.lightboxCloseButton}
        aria-label="Close image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        className={`${styles.lightboxContent} ${isWebDevelopment ? styles.lightboxContentScrollable : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={isWebDevelopment ? styles.lightboxImageContainer : ''}>
          <img
            src={imageUrl}
            alt="Portfolio zoom"
            className={`${styles.lightboxImage} ${isWebDevelopment ? styles.lightboxImageScrollable : ''}`}
          />
        </div>
      </div>
    </div>
  );
};
const portfolio = ({ data, variant }: ProvenSuccessProps) => {
  const portfolioData = data || PROVEN_SUCCESS_DATA;
  const isWebDevelopment = variant === 'web-development';
  const filteredTabs = isWebDevelopment ? [] : portfolioData.tabs;
  const [activeTab, setActiveTab] = useState<string>(
    filteredTabs.length > 0 ? filteredTabs[0].id : ''
  );
  const [isFading, setIsFading] = useState<boolean>(false);
  const [displayedTabId, setDisplayedTabId] = useState<string>(
    filteredTabs.length > 0 ? filteredTabs[0].id : ''
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayedTab = filteredTabs.find((tab) => tab.id === displayedTabId) || filteredTabs[0];
  useEffect(() => {
    if (!isWebDevelopment && activeTab) {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setDisplayedTabId(activeTab);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 300);
      return () => clearTimeout(fadeTimer);
    }
  }, [activeTab, isWebDevelopment]);


  return (
    <section className={`sectionPadding provenSuccess ${styles.section} ${styles.ProvenSuccess}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.header + " sectionHeading forH2"}>
          <h2>
            <span className="text-white">Proven </span>
            <span className="text-[#0fdac2]">{portfolioData.headline.highlighted}</span>
            <span className="text-white"> in Every Project</span>
          </h2>
          <p className={styles.description}>{portfolioData.description}</p>
        </div>
        {!isWebDevelopment && (
          <div className={styles.tabsContainer}>
            {portfolioData.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        {isWebDevelopment ? (          
          <div className={styles.portfolioGrid}>
            {WEB_DEV_PORTFOLIO.map((item, index) => (
              <div
                key={index}
                className={styles.portfolioItem}
                onClick={() => setSelectedImage(item.zoom)}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.normal}
                    alt={`Web Development Portfolio ${index + 1}`}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.overlay}>
                    <svg
                      className={styles.zoomIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            key={displayedTabId}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
              }`}
          >
            {displayedTab.images.map((image, index) => (
              <div
                key={`${displayedTabId}-${index}`}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${displayedTab.label} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
        <ImageLightbox
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage}
          isWebDevelopment={isWebDevelopment}
        />
      </Container>
    </section>
  );
};

export default portfolio;