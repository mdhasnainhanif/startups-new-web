import React from "react";
import styles from "./AiAgentHero.module.css";
import Container from "../../Container";
import Button from "../../Button";
import { ArrowRightIcon } from "../../icons";

const AiAgentHero = () => {
  return (
    <section id="ai-hero" className={styles.aiHeroSection}>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center pt-36">
          <div className="w-full max-w-7xl text-center sectionHeading">
            {/* <div className={`${styles.aiHeroBadge} mb-3`}>
              <i className="fas fa-robot me-2"></i>
              <span>AI Service Platform</span>
            </div> */}

            <h1>
              Intelligent AI Services That Work 24/7.
              <br />
              <span style={{ color: "var(--color-primary)" }}>
                Learn. Adapt. Deliver Results.
              </span>
            </h1>
            <p className="lead text-white mb-4 max-w-4xl mx-auto mt-5">
              Transform your business with cutting-edge AI solutions that
              automate workflows, enhance customer experiences, and drive
              measurable results around the clock.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Button 
                href="#contact" 
                variant="green" 
                size="lg"
                icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                iconPosition="right"
              >
                Get Started with AI Services
              </Button>
              <Button 
                href="#ai-features" 
                variant="purple" 
                size="lg"
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiAgentHero;

