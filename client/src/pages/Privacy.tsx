import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <p className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link> › Privacy Policy
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
            <h1 className="text-3xl font-extrabold text-secondary mb-2">Privacy Policy</h1>
            <div className="bg-slate-50 border-l-4 border-primary px-4 py-3 rounded mb-8 text-sm font-medium text-slate-700">
              <strong>Effective Date:</strong> March 15, 2026
            </div>

            <h2>1. Introduction</h2>
            <p>Blue Mogul Enterprise, LLC ("Blue Mogul," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.</p>
            <p>We are a 100% veteran-owned Texas limited liability company headquartered in Houston, Texas. By using our services, you consent to the practices described in this policy.</p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We collect information you voluntarily provide when you:</p>
            <ul>
              <li><strong>Contact us:</strong> Name, email address, phone number, company name</li>
              <li><strong>Request a demo:</strong> Name, work email, company name, phone (optional)</li>
              <li><strong>Create an account:</strong> Name, email, password, billing information</li>
              <li><strong>Purchase services:</strong> Billing address, payment information (processed securely via Stripe)</li>
              <li><strong>Submit support tickets:</strong> Issue descriptions, screenshots, files</li>
              <li><strong>Communicate with us:</strong> Any information in your messages</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you visit our websites, we may automatically collect:</p>
            <ul>
              <li><strong>Log data:</strong> IP address, browser type, operating system, referring URLs, pages viewed, time/date stamps</li>
              <li><strong>Device information:</strong> Device type, unique device identifiers</li>
              <li><strong>Usage data:</strong> How you interact with our websites and services</li>
              <li><strong>Cookies:</strong> Small data files stored on your device (see Section 6)</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <ul>
              <li><strong>Business partners:</strong> Frontier Communications, TravelSim/BICS, Voip.ms, Vultr</li>
              <li><strong>Lead generation services:</strong> Apollo.io, LinkedIn</li>
              <li><strong>Payment processors:</strong> Stripe (we never store full credit card numbers)</li>
              <li><strong>Public sources:</strong> Public databases, business registrations</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li><strong>Providing services:</strong> Delivering, maintaining, and improving our IT services, cloud hosting, fiber internet, and voice solutions</li>
              <li><strong>Account management:</strong> Creating and managing your account, billing, support</li>
              <li><strong>Communication:</strong> Responding to inquiries, sending service updates, technical support</li>
              <li><strong>Marketing:</strong> Sending promotional materials (you may opt out anytime)</li>
              <li><strong>Legal compliance:</strong> Complying with laws, regulations, and legal requests</li>
              <li><strong>Security:</strong> Detecting and preventing fraud, abuse, and security incidents</li>
              <li><strong>Improvement:</strong> Analyzing usage to enhance our services and user experience</li>
              <li><strong>AI training:</strong> Improving our AI agents (using aggregated, anonymized data only)</li>
            </ul>

            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <ul>
              <li><strong>Contract performance:</strong> To provide services you requested</li>
              <li><strong>Legitimate interests:</strong> To improve services, prevent fraud, ensure security</li>
              <li><strong>Consent:</strong> For marketing communications (withdrawn anytime)</li>
              <li><strong>Legal obligations:</strong> To comply with applicable laws</li>
            </ul>

            <h2>5. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <h3>5.1 Service Providers</h3>
            <ul>
              <li><strong>Frontier Communications:</strong> Fiber internet provisioning</li>
              <li><strong>TravelSim/BICS:</strong> Global wireless and eSIM services</li>
              <li><strong>Voip.ms:</strong> Voice services and phone systems</li>
              <li><strong>Vultr:</strong> Cloud infrastructure hosting</li>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>n8n:</strong> Workflow automation</li>
              <li><strong>ITarian:</strong> Remote monitoring and management</li>
              <li><strong>ITFlow:</strong> Client portal and ticketing</li>
            </ul>
            <p>These providers have access only to information necessary to perform their functions and are bound by confidentiality agreements.</p>
            <h3>5.2 Legal Requirements</h3>
            <p>We may disclose information if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Blue Mogul, our clients, or others.</p>
            <h3>5.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to keep you logged in, remember your preferences, understand how you use our site, and improve user experience. You can control cookies through your browser settings.</p>
            <h3>6.1 Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential cookies:</strong> Required for portal login and basic functions</li>
              <li><strong>Analytics cookies:</strong> Help us understand site usage (optional)</li>
              <li><strong>Functional cookies:</strong> Remember your preferences</li>
              <li><strong>Marketing cookies:</strong> Used only with your consent</li>
            </ul>

            <h2>7. Data Security</h2>
            <ul>
              <li>Encryption in transit (SSL/TLS for all websites and APIs)</li>
              <li>Encryption at rest where possible</li>
              <li>24/7 security monitoring (Wazuh)</li>
              <li>Regular security audits</li>
              <li>Access controls and two-factor authentication for staff</li>
              <li>Secure datacenters in Dallas, Texas</li>
              <li>Daily backups with 30-day retention</li>
            </ul>

            <h2>8. Data Retention</h2>
            <ul>
              <li><strong>Account information:</strong> Duration of your account plus 90 days</li>
              <li><strong>Billing records:</strong> 7 years (tax/legal requirements)</li>
              <li><strong>Support tickets:</strong> 2 years</li>
              <li><strong>Demo accounts:</strong> 14 days (automatically deleted)</li>
              <li><strong>Marketing data:</strong> Until you unsubscribe</li>
              <li><strong>Logs:</strong> 90 days</li>
              <li><strong>Backups:</strong> 30–90 days depending on service</li>
            </ul>

            <h2>9. Your Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Restrict processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing for direct marketing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:privacy@bluemogul.biz">privacy@bluemogul.biz</a>. We will respond within 30 days.</p>

            <h2>10. California Privacy Rights (CCPA)</h2>
            <ul>
              <li>Right to know what personal information we collect, use, and share</li>
              <li>Right to delete personal information (with exceptions)</li>
              <li>Right to opt out of sale of personal information (we do not sell)</li>
              <li>Right to non-discrimination for exercising rights</li>
            </ul>
            <p>To exercise California rights, email <a href="mailto:privacy@bluemogul.biz">privacy@bluemogul.biz</a> or call <a href="tel:3463095514">(346) 309-5514</a>.</p>

            <h2>11. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18. We do not knowingly collect information from children.</p>

            <h2>12. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in the United States. For EU residents, we ensure adequate safeguards through Standard Contractual Clauses with our subprocessors.</p>

            <h2>13. Third-Party Links</h2>
            <p>Our websites may contain links to third-party sites. We are not responsible for their privacy practices.</p>

            <h2>14. Your Choices</h2>
            <ul>
              <li><strong>Marketing emails:</strong> Click unsubscribe in any marketing email</li>
              <li><strong>Cookies:</strong> Adjust browser settings</li>
              <li><strong>Account information:</strong> Update in your client portal</li>
              <li><strong>Do Not Track:</strong> We honor Do Not Track signals</li>
            </ul>

            <h2>15. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of material changes by email or prominent notice on our website.</p>

            <h2>16. Contact Us</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:privacy@bluemogul.biz">privacy@bluemogul.biz</a></li>
              <li><strong>Phone:</strong> <a href="tel:3463095514">(346) 309-5514</a></li>
              <li><strong>Mail:</strong> Blue Mogul Enterprise, LLC, 801 Travis St, Houston, TX 77002</li>
              <li><strong>Portal:</strong> <a href="https://portal.bluemogul.biz" target="_blank" rel="noopener noreferrer">portal.bluemogul.biz</a></li>
            </ul>
            <p>Our Data Protection Officer can be reached at <a href="mailto:dpo@bluemogul.biz">dpo@bluemogul.biz</a>.</p>

            <div className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500">
              <p>© 2026 Blue Mogul Enterprise, LLC. All rights reserved. | Veteran-Owned | Houston, Texas</p>
              <p>Version 1.0 — Effective March 15, 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
