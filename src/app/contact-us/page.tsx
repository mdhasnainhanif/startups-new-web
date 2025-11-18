import React from 'react'
import ContactForm from '../components/ContactPage/ContactForm/ContactForm'
import { contactFormData } from '../components/ContactPage/ContactForm/data'
import { contactFormAddressData } from '../components/ContactPage/ContactFormAddress/data'
import { FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES } from '../constants'
import FAQ from '../components/FAQ/FAQ'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import ContactFormAddress from '../components/ContactPage/ContactFormAddress/ContactFormAddress'
import ContactCta from '../components/ContactPage/ContactCta/ContactCta'
import BusinessSlider from '../components/ContactPage/BuisnessSlider/BuisnessSlider'
import BusinessPlaylist from '../components/ContactPage/BusinessPlaylist/BusinessPlaylist'

export default function ContactPage() {

  const ctaData = {
    title: "Schedule a",
    highlight: "Meeting",
    description:
      "You’re great at what you do, but your marketing falls behind. Agencies cost a fortune. Freelancers disappear.",
    buttons: [
      { label: "Google Meet", icon: "/assets/images/google_meets.png", link: "https://meet.google.com" },
      { label: "Zoom", icon: "/assets/images/zoom.png", link: "https://zoom.us" },
      { label: "Calendly", icon: "/assets/images/calendly.png", link: "https://calendly.com" },
      { label: "Whatsapp", icon: "/assets/images/whatsapp.png", link: "https://wa.me/923XXXXXXXXX" },
    ],
  };

  const playlistData = {
  mainTitle: "Local",
  highlightTitle: "Businesses",
  subtitle: "You’re great at what you do, but your marketing falls behind. Agencies cost a fortune. Freelancers disappear.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  playlistTitle: "Title of Your Playlist",
  playlistInfo: {
    totalLessons: 50,
    totalDuration: "50h 40m",
  },
  playlistItems: [
    { id: 1, title: "Custom Select Box 02", duration: "41:25" },
    { id: 2, title: "Custom Select Box 03", duration: "16:59" },
    { id: 3, title: "Custom Select Box 04", duration: "24:15", isPlaying: true },
    { id: 4, title: "Custom Select Box 05", duration: "30:02" },
    { id: 5, title: "Custom Select Box 06", duration: "15:25" },
  ],
};

  return (
    <div className="min-h-screen pt-45 pb-12 ">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Let's Collaborate and <span className="text-[#0fdac2]">Create</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#0fdac2]">Powerful AI</span>{' '}
          <span className="text-white">Solutions</span>
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto">
        <ContactForm config={contactFormData} />
        <ContactFormAddress config={contactFormAddressData} />
      </div>
      <BusinessSlider />

      {/* 🟢 Fix — pass props */}
      <ContactCta {...ctaData} />
      <BusinessPlaylist {...playlistData} />

      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
    </div>
  );
}
