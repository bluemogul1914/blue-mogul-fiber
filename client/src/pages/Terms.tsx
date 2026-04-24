import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <p className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link> › Terms &amp; Conditions
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
            <h1 className="text-3xl font-extrabold text-secondary mb-2">Terms &amp; Conditions</h1>
            <div className="bg-slate-50 border-l-4 border-primary px-4 py-3 rounded mb-8 text-sm font-medium text-slate-700">
              <strong>Effective Date:</strong> March 15, 2026
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>Welcome to Blue Mogul Enterprise, LLC ("Blue Mogul," "we," "us," or "our"). By accessing our website, using our services, or signing any service agreement, you agree to be bound by these Terms &amp; Conditions, our Privacy Policy, and any applicable Service Orders or Statements of Work (collectively, the "Agreement").</p>
            <p>If you are entering into this Agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.</p>

            <h2>2. Definitions</h2>
            <ul>
              <li><strong>"Client" or "You"</strong> — the individual or entity using our services.</li>
              <li><strong>"Services"</strong> — all products and services provided by Blue Mogul, including managed IT, Nextcloud hosting, fiber internet, voice services, cybersecurity, and consulting.</li>
              <li><strong>"Service Order"</strong> — an order form executed by both parties specifying services, fees, and terms.</li>
              <li><strong>"SOW"</strong> — Statement of Work for project-based services.</li>
              <li><strong>"Portal"</strong> — <a href="https://portal.bluemogul.biz" target="_blank" rel="noopener noreferrer">portal.bluemogul.biz</a> and related systems.</li>
              <li><strong>"AI Agents"</strong> — automated workflows and systems that deliver services.</li>
              <li><strong>"Third-Party Providers"</strong> — Frontier Communications, TravelSim/BICS, Voip.ms, Vultr, and other partners.</li>
            </ul>

            <h2>3. Services</h2>
            <h3>3.1 Service Description</h3>
            <ul>
              <li><strong>Managed IT Services:</strong> Remote monitoring, help desk, patch management, endpoint protection</li>
              <li><strong>Nextcloud Private Cloud:</strong> Secure file hosting, collaboration, document editing</li>
              <li><strong>Fiber Internet:</strong> High-speed broadband connectivity</li>
              <li><strong>Voice Services:</strong> VoIP phone systems via Voip.ms</li>
              <li><strong>Cybersecurity:</strong> Security monitoring, audits, incident response</li>
              <li><strong>Consulting:</strong> Technology strategy and project implementation</li>
            </ul>

            <h3>3.2 Service Levels</h3>
            <p>Standard response times:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse my-4">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">Priority</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">Definition</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">Response Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-200 px-3 py-2">Critical (P1)</td><td className="border border-slate-200 px-3 py-2">System down, security breach</td><td className="border border-slate-200 px-3 py-2">1 hour</td></tr>
                  <tr><td className="border border-slate-200 px-3 py-2">High (P2)</td><td className="border border-slate-200 px-3 py-2">Major feature impaired</td><td className="border border-slate-200 px-3 py-2">4 hours</td></tr>
                  <tr><td className="border border-slate-200 px-3 py-2">Medium (P3)</td><td className="border border-slate-200 px-3 py-2">Minor issue, workaround exists</td><td className="border border-slate-200 px-3 py-2">8 hours</td></tr>
                  <tr><td className="border border-slate-200 px-3 py-2">Low (P4)</td><td className="border border-slate-200 px-3 py-2">Information request</td><td className="border border-slate-200 px-3 py-2">24 hours</td></tr>
                </tbody>
              </table>
            </div>

            <h3>3.3 Third-Party Services</h3>
            <p>Some services are provided through third-party partners. Blue Mogul is not liable for acts or omissions of third parties.</p>

            <h3>3.4 Modifications</h3>
            <p>We may modify services with reasonable notice. For material changes that adversely affect you, you may terminate without penalty within 30 days of notice.</p>

            <h2>4. Fees and Payment</h2>
            <h3>4.1 Fees</h3>
            <ul>
              <li><strong>Monthly recurring:</strong> Billed in advance on the 1st of each month</li>
              <li><strong>One-time fees:</strong> Billed upon order confirmation</li>
              <li><strong>Usage-based:</strong> Billed monthly in arrears</li>
              <li><strong>Setup fees:</strong> Non-refundable once work begins</li>
            </ul>
            <h3>4.2 Payment Terms</h3>
            <ul>
              <li>Invoices are due upon receipt</li>
              <li>Late payments incur 1.5% monthly interest (18% APR) or maximum allowed by law</li>
              <li>Unpaid invoices may result in service suspension</li>
              <li>Reactivation fee: $150 after suspension</li>
            </ul>
            <h3>4.3 Taxes</h3>
            <p>You are responsible for all applicable federal, state, and local taxes, fees, and surcharges.</p>
            <h3>4.4 Price Changes</h3>
            <p>We may change fees with 30 days notice. If you disagree, you may terminate without penalty before the change takes effect.</p>

            <h2>5. Term and Termination</h2>
            <h3>5.1 Term</h3>
            <p>Initial term is as specified in your Service Order (typically 12 months). Agreement automatically renews for successive one-year terms unless either party provides 60 days written notice.</p>
            <h3>5.2 Termination for Cause</h3>
            <p>Either party may terminate immediately if the other materially breaches and fails to cure within 15 days of notice, becomes insolvent, or violates law in connection with services.</p>
            <h3>5.3 Termination for Convenience</h3>
            <ul>
              <li>90 days written notice required</li>
              <li>Payment of all fees through termination date</li>
              <li>Early Termination Liability (ETL) for fiber: $200–$500 depending on speed</li>
              <li>ETL for other services: 50% of remaining contract value</li>
            </ul>
            <h3>5.4 Effect of Termination</h3>
            <ul>
              <li>Your access to services ceases</li>
              <li>We will provide data export within 15 days upon request</li>
              <li>Unpaid fees become immediately due</li>
              <li>We may delete your data after 90 days</li>
            </ul>

            <h2>6. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain current contact information</li>
              <li>Designate authorized contacts</li>
              <li>Provide reasonable access to facilities and systems</li>
              <li>Comply with all security policies</li>
              <li>Maintain your own backups of critical data</li>
              <li>Not misuse or abuse our systems or personnel</li>
              <li>Not resell services without written permission</li>
              <li>Keep login credentials confidential</li>
              <li>Notify us immediately of security incidents</li>
            </ul>

            <h2>7. Acceptable Use Policy</h2>
            <p>You may not use our services to violate any law, infringe intellectual property rights, transmit malware, launch denial-of-service attacks, send spam, access unauthorized systems, store child sexual abuse material (zero tolerance), harass or threaten others, engage in phishing or fraud, or exceed reasonable resource usage.</p>
            <p>Violation may result in immediate suspension or termination.</p>

            <h2>8. Intellectual Property</h2>
            <h3>8.1 Our IP</h3>
            <p>We retain all rights to our software, tools, methodologies, AI Agents, documentation, trademarks, and proprietary processes. You receive a limited, non-exclusive, non-transferable license to use our services.</p>
            <h3>8.2 Your IP</h3>
            <p>You retain all rights to your data, content, and business information. You grant us a license to use your data solely to provide services to you.</p>

            <h2>9. Confidentiality</h2>
            <p>Both parties agree to hold Confidential Information in strict confidence, including business plans, technical data, security assessments, client lists, pricing, financial information, and security vulnerabilities. Obligations survive termination for 3 years (5 years for trade secrets).</p>

            <h2>10. Data Ownership and Backup</h2>
            <p>You own all your data. We do not mine, sell, or use your data for any purpose other than providing services to you. Backups are provided as a service but not guaranteed — you are ultimately responsible for your data.</p>

            <h2>11. Limitation of Liability</h2>
            <h3>11.1 Cap on Liability</h3>
            <p>Our total liability shall not exceed the total fees paid by you during the 12 months preceding the claim.</p>
            <h3>11.2 Exclusion of Damages</h3>
            <p>Neither party shall be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.</p>
            <h3>11.3 Third-Party Services</h3>
            <p>We are not liable for acts or omissions of third-party providers, including Frontier, TravelSim, Voip.ms, and Vultr.</p>

            <h2>12. Indemnification</h2>
            <p>You agree to indemnify and hold Blue Mogul harmless from any claims, damages, or expenses arising from your use of services, your violation of law, your breach of this Agreement, or third-party claims related to your data.</p>

            <h2>13. Warranty Disclaimer</h2>
            <p className="uppercase font-semibold text-slate-700">Services are provided "as is" and "as available." We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted or error-free service.</p>

            <h2>14. Force Majeure</h2>
            <p>Neither party shall be liable for delays or failures resulting from causes beyond reasonable control, including acts of God, war, terrorism, government action, network outages, strikes, pandemics, or third-party provider failures.</p>

            <h2>15. Dispute Resolution</h2>
            <ul>
              <li><strong>Governing Law:</strong> State of Texas</li>
              <li><strong>Venue:</strong> Harris County, Texas</li>
              <li><strong>Informal Resolution:</strong> 30-day good-faith resolution period before any action</li>
              <li><strong>Arbitration:</strong> Binding arbitration in Houston, TX under AAA rules</li>
              <li><strong>Class Action Waiver:</strong> All disputes resolved on individual basis only</li>
            </ul>

            <h2>16. Severability</h2>
            <p>If any provision is found unenforceable, the remaining provisions remain in full force.</p>

            <h2>17. Waiver</h2>
            <p>Failure to enforce any right does not constitute waiver.</p>

            <h2>18. Entire Agreement</h2>
            <p>This Agreement, together with all Service Orders and SOWs, constitutes the entire agreement and supersedes all prior agreements. Modifications must be in writing signed by both parties.</p>

            <h2>19. Assignment</h2>
            <p>You may not assign this Agreement without our written consent. We may assign without consent to affiliates or in connection with merger/acquisition.</p>

            <h2>20. Notices</h2>
            <ul>
              <li><strong>Blue Mogul:</strong> 801 Travis St, Houston, TX 77002 · <a href="mailto:legal@bluemogul.biz">legal@bluemogul.biz</a></li>
              <li><strong>You:</strong> Address in your account</li>
            </ul>

            <h2>21. Electronic Signature</h2>
            <p>Electronic signatures are binding. By checking boxes or clicking "I Agree," you consent to electronic transactions.</p>

            <h2>22. Survival</h2>
            <p>Sections 8 (IP), 9 (Confidentiality), 10 (Data), 11 (Liability), 12 (Indemnification), 13 (Warranty), and 15 (Disputes) survive termination.</p>

            <h2>23. Contact Information</h2>
            <ul>
              <li><strong>General:</strong> <a href="mailto:info@bluemogul.biz">info@bluemogul.biz</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@bluemogul.biz">support@bluemogul.biz</a></li>
              <li><strong>Billing:</strong> <a href="mailto:billing@bluemogul.biz">billing@bluemogul.biz</a></li>
              <li><strong>Legal:</strong> <a href="mailto:legal@bluemogul.biz">legal@bluemogul.biz</a></li>
              <li><strong>Phone:</strong> <a href="tel:3463095514">(346) 309-5514</a></li>
              <li><strong>Portal:</strong> <a href="https://portal.bluemogul.biz" target="_blank" rel="noopener noreferrer">portal.bluemogul.biz</a></li>
            </ul>

            <h2>24. Acknowledgment</h2>
            <p className="uppercase font-semibold text-slate-700">By using our services, you acknowledge that you have read these terms, understand them, and agree to be bound by them.</p>

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
