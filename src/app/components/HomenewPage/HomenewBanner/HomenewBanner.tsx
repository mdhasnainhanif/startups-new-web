import styles from './HomenewBanner.module.css';
import Button from "../../Button";
import { ArrowRightIcon } from "../../icons";

const HomenewBanner = () => {
  return (
  <section className={`sectionPadding ${styles.extraPaddingTop} md:px-16 lg:flex lg:items-center lg:justify-between`}>
       <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Your AI-Powered Design Team <br className="hidden md:block" /> Ready From Day One
        </h1>
        <p className="text-white-700 text-lg mb-6">
          Everything your business needs to look professional, trusted, and ready to serve — handled by your own design team powered by AI and real experts
        </p>

        <div className={`${styles.experienceBox} p-6 rounded-lg shadow-sm mb-6`}>
  <h3 className="text-xl font-semibold text-white mb-4">
    Experience Box – Your Design Team’s Expertise
  </h3>
  <ul className="space-y-2 text-white list-none ">
    <li className={styles.checkItem} >2,500+ full brand kits created for local businesses</li>
    <li className={styles.checkItem}>40+ years combined experience in business design</li>
    <li className={styles.checkItem}>Specialists for branding, social, print, website, and ads</li>
    <li className={styles.checkItem}>Design systems used by real customers in 15+ industries</li>
    <li className={styles.checkItem}>Trained in AI, modern design tools, and high-conversion branding</li>
  </ul>
</div>


       
  <Button href="#" variant="primary" icon={<ArrowRightIcon style={{ fill: "#fff" }} />} iconPosition="right">
           Book a Free Call to See How It Works →
        </Button>
    

      </div>

       <div className="mt-10 lg:mt-0 lg:ml-12">
        <img
        //   src="public/assets/images/homenewbanner-image.webp"
          src="/assets/images/homenewbanner-img.webp"
          alt="AI Design Team Character"
          className="w-full max-w-sm mx-auto"
        />
      </div>
    </section>
  );
};

export default HomenewBanner;

