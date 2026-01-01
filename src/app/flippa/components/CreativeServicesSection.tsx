'use client';

import Container from '../../components/Container';
import Button from '../../components/Button';
import styles from './CreativeServicesSection.module.css';

const features = [
  {
    icon: "/assets/images/flippa/subscription/1.svg",
    title: 'Spin up a creative team fast',
    description: 'Low complexity to build from scratch or plug into your current team.',
  },
  {
    icon: "/assets/images/flippa/subscription/2.svg",
    title: 'Reliable turnarounds',
    description: 'Average 24-hour first drafts, handled with consistency and care.',
  },
  {
    icon: "/assets/images/flippa/subscription/3.svg",
    title: 'Quality guaranteed',
    description: 'Vetted creatives supported by processes and AI tools.',
  },
  {
    icon: "/assets/images/flippa/subscription/4.svg",
    title: 'Transparent pricing',
    description: 'Build a subscription that matches your current demands.',
  },
  {
    icon: "/assets/images/flippa/subscription/5.svg",
    title: 'Human support, always on',
    description: 'Our support team is here 24/5.',
  },
];

const services = [
  {
    icon: "/assets/images/flippa/subscription/6.svg",
    title: 'Brand & Identity',
    description: 'Build brand experiences that last',
  },
  {
    icon: "/assets/images/flippa/subscription/7.svg",
    title: 'Marketing & Advertising',
    description: 'Creative that drives results',
  },
  {
    icon: "/assets/images/flippa/subscription/8.svg",
    title: 'Digital & Web',
    description: 'UI designs that captivate and convert',
  },
  {
    icon: "/assets/images/flippa/subscription/9.svg",
    title: 'Motion & Video',
    description: 'Make every message move',
  },
  {
    icon: "/assets/images/flippa/subscription/10.svg",
    title: 'Print',
    description: 'Print designs for memorable communication',
  },
  {
    icon: "/assets/images/flippa/subscription/11.svg",
    title: 'Illustration & Artwork',
    description: 'Custom designs to enhance your brand',
  },
];

const CreativeServicesSection = () => {
  return (
    <section className={`${styles.creativeServicesSection} sectionPadding bg-[var(--color-dark)] relative overflow-hidden`}>
      <Container maxWidth="xl">
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.label}>YOUR ULTIMATE CREATIVE PARTNER</div>
          <h2 className={styles.headline}>
            <span className={styles.headlinePart1}>Unlimited Design,</span>{' '}
            <span className={styles.headlinePart2}>One Subscription</span>
          </h2>
          <p className={styles.description}>
            ValueAccel is a subscription-based creative service platform with expert talent, smart systems, and dedicated support.
          </p>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img className="max-w-8" src={feature.icon} alt={feature.title} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img className="max-w-8" src={service.icon} alt={service.title} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <Button variant="green" size="lg" className="group flex items-center gap-2">
            View All 12 Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CreativeServicesSection;

