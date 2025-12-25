import type { Metadata } from "next";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import { contactFormData } from "../components/ContactPage/ContactForm/data";
import { contactFormAddressData } from "../components/ContactPage/ContactFormAddress/data";
import { FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES } from "../constants";
import FAQ from "../components/FAQ/FAQ";
import GrowthSlider from "../components/GrowthSlider/GrowthSlider";
import ContactFormAddress from "../components/ContactPage/ContactFormAddress/ContactFormAddress";
export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Startups Advisory",
  description: "Let's connect and build your next growth chapter. Get in touch with our team to discuss how we can help accelerate your business growth.",
  robots: "nofollow",
};
export default function ContactPage() {
  const ctaData = {
    title: "Book a Strategy",
    highlight: "Call",
    description:
      "You deserve clarity. You deserve guidance. You deserve a partner who understands growth and helps you move forward with confidence.",
    buttons: [
      {
        label: "Google Meet",
        icon: "/assets/images/google_meets.png",
        link: "https://meet.google.com",
      },
      {
        label: "Zoom",
        icon: "/assets/images/zoom.png",
        link: "https://zoom.us",
      },
      {
        label: "Calendly",
        icon: "/assets/images/calendly.png",
        link: "https://calendly.com",
      },
      {
        label: "Whatsapp",
        icon: "/assets/images/whatsapp.png",
        link: "https://wa.me/923XXXXXXXXX",
      },
    ],
  };
  const playlistData = {
    mainTitle: "Growing Businesses Need",
    highlightTitle: " Clear Direction",
    subtitle:
      "You're great at what you do, but your marketing falls behind. Agencies cost a fortune. Freelancers disappear.",
    videoThumbnail: "/assets/images/tb.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    playlistTitle: "Title of Your Playlist",
    playlistInfo: {
      totalLessons: 50,
      totalDuration: "50h 40m",
    },
    playlistItems: [
      { id: 1, number: "02.", title: "Custom Select Box", duration: "41:25" },
      { id: 2, number: "03.", title: "Custom Select Box", duration: "16:59" },
      {
        id: 3,
        number: "04.",
        title: "Custom Select Box",
        duration: "24:15",
        isPlaying: true,
      },
      { id: 4, number: "05.", title: "Custom Select Box", duration: "30:02" },
      { id: 5, number: "06.", title: "Custom Select Box", duration: "15:25" },
    ],
  };
  return (
    <>
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 text-center pt100 contactMain sectionHeading">
        <h1 className="mb-2 max-w-4xl mx-auto md:pt-20">
        Let’s Connect and Build <span className="text-[#0fdac2]">Your Next Growth</span> Chapter
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <ContactForm config={contactFormData} />
        <ContactFormAddress config={contactFormAddressData} />
      </div>
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      </>
  );
}
