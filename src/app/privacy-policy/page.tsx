import type { Metadata } from "next";
import PageBanner from "../components/PageBanner/PageBanner";
import Container from "../components/Container";
import { COMPANY_INFO } from "../constants";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Privacy Policy | Startups Advisory",
  description: "Privacy Policy for Startups Advisory services",
  robots: "nofollow",
};
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className={styles.contentSection}>
        <Container maxWidth="xl">
          <div className={styles.content}>
            <div className={styles.policySection}>
              <p>
                Startups Advisory respects the privacy of its customers and visitors. We do not promote spam or any illegal thing. We strictly follow the global privacy policies and guidelines in order to maintain a legal environment on web. We've made our privacy policy clear below and by continuing to use our website, you agree to it. We highly recommend you to read our{" "}
                <a href="/terms-and-condition" className={styles.link}>
                  terms & conditions
                </a>
                .
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Collection</span> of customer's information
              </h3>
              <p>
                The non-personal information will be collected automatically when you'll visit our website. The non-personal information includes your ip address, browser, language and access times. We may also collect the information about your actions within the site.
              </p>
              <p>
                We do collect the personal information from our customers during signup process. It includes the collection of your name, email address, phone number and home or work address. We also collects your credit card details, banking and other financial information for billing purposes.
              </p>
              <p>
                The email address collected from you is only used to send you important notifications, announcements, special offers and blog posts. We do not spam inboxes. However, you can unsubscribe from getting emails anytime.
              </p>
              <p>
                All these information is for our record purpose. We don't sell or leak our database information to anyone. If you want to review or revise your provided information, you can easily do it from My Account section.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Security</span> of customer's information
              </h3>
              <p>
                We respect your trust on us when you submit your personal information to us. We take it seriously. We've a highly encrypted system embedded in our website to protect our databases. Our dedicated teams are always active in keeping the system up to date and safe from vulnerabilities.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Children</span> Policy
              </h3>
              <p>
                We are not intended to provide services to anyone who is under the age of 13. If you're under 13 then you should not continue to use this site.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>External Linking</span> Policy
              </h3>
              <p>
                We may link to other third party sources that have their own privacy policies. We don't own or take responsibility for the linked sites. Furthermore, we link to external sites only for source purpose. We don't advertise or rent links on our site.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Testimonials</span>
              </h3>
              <p>
                We only show the testimonials of our happy clients on our site. If you wish to provide a testimonial, we'll display it with your name. However, if you choose to take down that testimonial or do some editing, you can contact us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                .
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>Legal Disclaimer</h3>
              <p>
                Startups Advisory have a right to disclose your personal information in awake of any legal action or to comply with the relevant laws. We may provide the non-personal and personal information to investigation agencies upon asking.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Changes</span> in this policy
              </h3>
              <p>
                This privacy policy is depending upon the occasional revisions. If we make changes in any of its point or add any new points, we'll notify you by sending email to the email address you provided to us. Also we'll push notifications in your dashboard.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                Consumer Data <span className={styles.highlight}>Safety Measures</span>
              </h3>
              <p>
                We respect your right of privacy. We therefore do not share your name and contact details with any third party. Besides, we keep information provided by you as confidential. The information you provide are used only to understand your requirements and to improve our services to suit your needs rather effectively. We ensure to follow the standards set by PCI and consumer data protection.
              </p>
              <p>
                It is hereby declared that our company does not authorize its representatives to collect any confidential information from our customers i.e. credit card information etc. Accordingly, we advise our customers not to share any confidential and sensitive nature information with our employees. If you do so; you shall be doing at your own risk and our company shall not be liable for any misuse.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                Privacy Policy for <span className={styles.highlight}>Email Address & Mobile Number</span> Collection
              </h3>
              
              <h4 className={styles.subHeading}>Introduction</h4>
              <p>
                This Privacy Policy explains how Startups Advisory collects, uses, and protects the email addresses and mobile numbers provided by users on our website. We are committed to ensuring that your privacy is protected and that we comply with all relevant data protection laws.
              </p>

              <h4 className={styles.subHeading}>Information We Collect</h4>
              <p>We may collect the following information:</p>
              <ul>
                <li>Email addresses</li>
                <li>Mobile phone numbers</li>
                <li>Any additional information provided voluntarily by the user.</li>
              </ul>

              <h4 className={styles.subHeading}>How We Use the Information</h4>
              <p>We use the collected mobile numbers for the following purposes:</p>
              <ul>
                <li>To send relevant updates related to our services.</li>
                <li>To notify users about account-related information.</li>
                <li>For internal record keeping.</li>
              </ul>

              <h4 className={styles.subHeading}>Consent for Mobile Number Collection</h4>
              <p>
                By providing your mobile number on Startups Advisory, you consent to the collection and use of this information as outlined in this Privacy Policy.
              </p>

              <h4 className={styles.subHeading}>Security</h4>
              <p>
                We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
              </p>

              <h4 className={styles.subHeading}>Controlling Your Personal Information</h4>
              <p>You may choose to restrict the collection or use of your mobile number in the following ways:</p>
              <p>
                If you have previously agreed to us using your mobile number for direct marketing purposes, you may change your mind at any time by contacting us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                {" "}or you can reply "STOP" or "Unsubscribe" to stop receiving the messages.
              </p>

              <h4 className={styles.subHeading}>Sharing Your Information</h4>
              <p>
                We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.
              </p>

              <h4 className={styles.subHeading}>Your Rights</h4>
              <p>
                You have the right to request details of the personal information we hold about you. If you would like a copy of this information, please contact us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                .
              </p>

              <h4 className={styles.subHeading}>Changes to this Policy</h4>
              <p>
                Startups Advisory may change this policy from time to time by updating this page. You should check this page periodically to ensure that you are comfortable with any changes.
              </p>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Pseudonym</span> Policy
              </h3>
              <p>We hold a policy of using the pseudonym to ensure the following:</p>
              <ul>
                <li>
                  With a view to avoid undue confusion and hassle at our customers end when they are assigned a new account manager, we use pseudonyms; it helps our customers remain connected with a single point of contact and remember their name comfortably.
                </li>
                <li>
                  Moreover; as our staff comprises of people from different regions and cultures, hence the use of pseudonym helps us present a uniform culture of the organization.
                </li>
                <li>
                  Your ordered work may be forwarded to any of our production or service centers located globally, for the quality delivery. However, they are also bound by an NDA to keep customer's information as highly confidential.
                </li>
              </ul>
            </div>
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Contact</span>
              </h3>
              <p>
                If you think any of your copyrighted material is being copied or posted on this website without your permission, you can contact us by either emailing us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                {" "}or you can use the contact form below.
              </p>
              <p>
                Furthermore, if you have any comments, suggestions or questions about this privacy policy, feel free to contact us via emailing at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                {" "}or you can call us at{" "}
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className={styles.link}>
                  {COMPANY_INFO.phone}
                </a>
                . Also you can visit us physically at {COMPANY_INFO.address}.
              </p>
              <p>
                Still in confusion? Read our Frequently asked questions section or know more about our company.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}