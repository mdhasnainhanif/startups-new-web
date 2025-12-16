import type { Metadata } from "next";
import PageBanner from "../components/PageBanner/PageBanner";
import Container from "../components/Container";
import { COMPANY_INFO } from "../constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Startups Advisory",
  description: "Terms and Conditions for Startups Advisory services",
  robots: "index, follow",
};

export default function TermsAndConditionPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" />
      
      <section className={styles.contentSection}>
        <Container maxWidth="xl">
          <div className={styles.content}>
            {/* Main Heading */}

            {/* Delivery Policy */}
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Delivery</span> Policy
              </h3>
              <p>
                Following receipt of your order, the services will be provided to you by the contract conditions for the services you purchased.
              </p>
              <p>
                The nature of the services you ordered, your prompt and accurate completion of your obligations regarding the execution of the services, and the date of your purchase may all have an impact on how quickly the services are delivered.
              </p>
              <p>
                Upon completion of the services, the services will be considered effectively supplied to you.
              </p>
              <p>
                Should the contract be canceled before the delivery services, the terms of the agreement will decide if you are entitled to a full, partial, or no return and how the contract may be discontinued.
              </p>
            </div>

            {/* Payment Policy */}
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Payment</span> Policy
              </h3>
              <p>
                If clients avail of any monthly service package of Startups Advisory, they are obliged to pay a full chargeable amount before the commencement of the work.
              </p>
              <p>
                Suppose Startups Advisory and the client agree on a fixed quote regarding any services. In that case, they are liable to pay 50% of the billable amount in advance before the commencement of the work. The remaining 50% of the payment will have to be made within 7 days of the start date of the services.
              </p>
              <p>
                Startups Advisory shall invoice the clients monthly, in advance.
              </p>
              <p>
                Also, if the clients do not pay a monthly invoice when it is due, Startups Advisory shall terminate the services immediately. In this case, we will not be liable to issue a 10-day prior notice.
              </p>
              <p>
                All charges quoted to the client shall be exclusive of VAT, which Startups Advisory shall add to its invoices at the appropriate rate.
              </p>
              <p>
                All additional work requested by the Client, which is requested following commencement of the Services and which is outside the scope of the Quotation (including any services necessarily procured to carry out the Services) shall be regarded as additional to the cost given in the Quotation and will be invoiced separately at the rates contained in the then-current Startups Advisory rate card.
              </p>
              <p>
                All charges listed in Quotations are estimates and are subject to final confirmation of technical specification.
              </p>
              <p>
                The parties agree that Startups Advisory may review and increase its standard hourly fee rates at any time, provided that such charges cannot be increased more than once in any 12 (twelve) month period.
              </p>
              <p>
                Startups Advisory will provide the Client with written notice of any such increase one (1) month before the proposed date of the rise. Suppose such an increase is not acceptable to the Client. In that case, within two (2) weeks of such notice being received or deemed to have been received per this condition, it may terminate the Contract by giving three (3) months written notice to Startups Advisory.
              </p>
              <p>
                Without prejudice to any other right or remedy that it may have if the Client fails to pay Startups Advisory on the Due Date, Startups Advisory may:
              </p>
              <ul>
                <li>
                  <strong>Charge interest</strong> on such sum under the Late Payment of Commercial Debts (Interest) Act 1998; from the Due Date, accruing daily and being compounded quarterly until payment is made, whether before or after any judgment, and the Client shall pay the interest immediately on demand; and suspend all Services until payment has been made in full.
                </li>
              </ul>
              <p>
                Time for payment shall be of the essence of the Contract.
              </p>
              <p>
                All sums payable to Startups Advisory under the Contract shall become due immediately on its termination. This condition is without prejudice to any right to claim for interest.
              </p>
              <p>
                Without prejudice to any other rights it may have, Startups Advisory may set off any Client's liability to Startups Advisory against any liability of Startups Advisory to the Client.
              </p>
            </div>

            {/* Platform and Merchant Fees */}
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                Platform and <span className={styles.highlight}>Merchant</span> Fees
              </h3>
              <p>
                By using our platform and services, you acknowledge and agree that certain fees may apply in connection with transactions, processing, and the ongoing use of our systems. These fees help maintain the quality, functionality, and security of the services we provide.
              </p>
              
              <h4 className={styles.subHeading}>1. Payment Processing</h4>
              <ul>
                <li>
                  Our platform utilizes third-party payment gateways (such as Stripe, PayPal, or equivalent providers) that typically charge a processing fee of approximately 2.9% + $0.30 per transaction, or as otherwise specified by the payment processor.
                </li>
                <li>
                  Additional fees may apply for chargeback handling, dispute resolution, or currency conversion when applicable.
                </li>
              </ul>

              <h4 className={styles.subHeading}>2. Quality Control & Assurance</h4>
              <p>
                Fees also contribute to platform monitoring, review systems, and dispute resolution processes to ensure a fair and transparent experience for all users.
              </p>

              <h4 className={styles.subHeading}>3. Technology & Infrastructure</h4>
              <p>Our fees help cover the costs associated with:</p>
              <ul>
                <li>Platform development and ongoing maintenance</li>
                <li>Server hosting and cloud services</li>
                <li>Web and mobile app upkeep</li>
                <li>Data storage, backup, and security measures</li>
                <li>Licensing and technology tools required to operate the platform securely and efficiently</li>
              </ul>
              <p>
                We reserve the right to modify or update our fee structure as necessary. Any changes will be communicated through an update to this page.
              </p>
            </div>

            {/* Refunds Policy */}
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.highlight}>Refunds</span> Policy
              </h3>
              <p>
                A full refund will be made if you decide to cancel our services within 5 days of payment.
              </p>
              <p>
                If you choose to terminate our services after the initial 5 days, you will be charged an amount equivalent to the working hours put into the project. The balance will be credited to the account from which you made payment within 45 days of cancellation.
              </p>
              <p>
                Cancellation of any service renewal should be made 10 days before the start of the next billing cycle.
              </p>
              <p>
                If cancellations are made after the start of the billing cycle, an amount equivalent to the working hours put into the project during that month will be billable, which the clients will be entitled to pay.
              </p>
              <p>
                If you signed up for our services but did not use them, you are still entitled to pay us.
              </p>
              <p>
                Amount of refund will be credited to the account from which the payment was made within 45 days of service cancellation.
              </p>
            </div>

            {/* Email & Mobile Phone Policy */}
            <div className={styles.policySection}>
              <h3 className={styles.sectionHeading}>
                Email & <span className={styles.highlight}>Mobile Phone</span> Policy
              </h3>
              <p>
                This policy outlines the terms and conditions regarding the use of email and mobile phone contact information provided to Startups Advisory.
              </p>

              <h4 className={styles.subHeading}>Consent and Usage</h4>
              <p>
                By providing your email address and/or mobile phone number, you consent to receive communication from Startups Advisory. This includes, transitional messages, periodic updates about your service or project, updates, newsletters, and services delivery e.g. Design attachments, Project updates and Revisions update.
              </p>

              <h4 className={styles.subHeading}>Carrier Charges Disclosure</h4>
              <p>
                Standard messaging and data rates may apply. Please consult your mobile service carrier for details.
              </p>

              <h4 className={styles.subHeading}>Stop & Unsubscribe</h4>
              <p>If you wish to stop receiving emails or mobile communications, you can:</p>
              <ul>
                <li>
                  For emails, click the "unsubscribe" link located at the bottom of any email you receive from us.
                </li>
                <li>
                  For mobile communications, reply "STOP" or "Unsub" "Unsubscribe" to any SMS message you receive from us. The SMS will be stopped right away.
                </li>
              </ul>

              <h4 className={styles.subHeading}>Frequency of Communication</h4>
              <p>
                We will strive to limit the frequency of our communications to a reasonable level. However, there may be exceptions during special update about project or urgent notifications.
              </p>

              <h4 className={styles.subHeading}>Security of Information</h4>
              <p>
                Your email address and mobile phone number will be kept confidential and will not be shared with third parties without your explicit consent, except as required by law.
              </p>

              <h4 className={styles.subHeading}>Changes to Policy</h4>
              <p>
                Startups Advisory reserves the right to modify this policy at any time. Any changes will be posted on our website, and it is your responsibility to review these changes.
              </p>

              <h4 className={styles.subHeading}>Contact Information</h4>
              <p>
                If you have any questions or concerns regarding this policy, please contact us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
                  {COMPANY_INFO.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
