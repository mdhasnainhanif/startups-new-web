import React from "react";
import styles from "./AiAgentServices.module.css";
import Container from "../../Container";
import Button from "../../Button";
import { ArrowRightIcon } from "../../icons";

const AiAgentServices = () => {
  const services = [
    {
      icon: "fab fa-whatsapp",
      iconWrapper: "service-icon-green",
      phoneColor: "phone-green",
      title: "WhatsApp AI Agent",
      description:
        "Responds instantly using your live knowledge base, so your team isn't stuck replying to repetitive queries. Identifies upgrade or cross-sell opportunities from ticket patterns. Reduces human ticket volume and increases qualified conversions through automated conversations.",
    },
    {
      icon: "fas fa-calendar-alt",
      iconWrapper: "service-icon-purple",
      phoneColor: "phone-purple",
      title: "Calendly AI Agent",
      description:
        "Embeds Calendly booking links directly into AI conversations. Triggers after product inquiries, support needs, or sales interest. Syncs with CRMs to confirm meetings instantly and reduce friction.",
    },
    {
      icon: "fas fa-chart-line",
      iconWrapper: "service-icon-yellow",
      phoneColor: "phone-yellow",
      title: "HubSpot AI Agent",
      description:
        "Captures and syncs lead data from chats directly into HubSpot. Automates follow-ups with workflows for sales and support teams. Provides real-time insights to boost conversions and customer retention.",
    },
    {
      icon: "fas fa-shopping-cart",
      iconWrapper: "service-icon-blue",
      phoneColor: "phone-blue",
      title: "Shopify AI Agent",
      description:
        "Handles product, order, refund, and shipping queries instantly by pulling live data from your store. Detects customer drop-offs and friction points in the purchase journey. Increases checkout completion rates and improves retention through faster, smarter post-sale support.",
    },
  ];

  return (
    <section id="ai-features" className={styles.aiServicesSection}>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl">
            <div className="sectionHeading forH2 text-center flex flex-col mb-12 md:mb-8 max-w-4xl mx-auto">
              <h2>
                AI That's
                <span style={{ color: "var(--color-primary)" }}>
                  {" "}
                  Actually Operational{" "}
                </span>
              </h2>
              <p>
                Our AI services plug directly into your business, no-code,
                real-time, and trained on your systems. From handling customer
                support to qualifying leads or syncing bookings, our AI agents
                act like full-time staff across multiple platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 items-stretch">
          {services.map((service, index) => (
            <div key={index} className={styles.aiServiceCard}>
              {/* <div
                className={`${styles.serviceIconWrapper} ${styles[service.iconWrapper]}`}
              >
                <i className={service.icon}></i>
              </div> */}
              <div className={styles.servicePhoneMockup}>
                <div
                  className={`${styles.phoneScreen} ${styles[service.phoneColor]}`}
                >
                  <div className={styles.phoneContent}>
                    <div className={styles.phoneHeader}>
                      <i className="fas fa-robot"></i>
                      <span>AI Assistant</span>
                    </div>
                    <div className={styles.phoneMessages}>
                      <div className={styles.phoneMessage}>Hello! How can I help?</div>
                      <div className={`${styles.phoneMessage} ${styles.userMsg}`}>
                        I need support
                      </div>
                      <div className={styles.phoneMessage}>
                        I'm here to assist you...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5>{service.title}</h5>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className="mt-2">
                <Button 
                  href="#contact" 
                  variant="green" 
                  size="md" 
                  className="w-full mt-2 flex justify-center items-center"
                  icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                >
                  Request Access
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AiAgentServices;

