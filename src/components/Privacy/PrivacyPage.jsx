import React, { useEffect, useRef, useState } from "react";
import TableOfContent from "./TableOfContent";

// Utility to slugify H2 text for IDs
const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");


// Main Privacy Content Component
function PrivacyContent({ setHeadings, activeId }) {
  const contentRef = useRef(null);

  useEffect(() => {
    // Find all H2s, slugify, set IDs, and build TOC
    const h2s = Array.from(contentRef.current.querySelectorAll("h2"));
    const headings = h2s.map(h2 => {
      const id = slugify(h2.textContent);
      h2.id = id;
      return { id, text: h2.textContent };
    });
    setHeadings(headings);
  }, [setHeadings]);

  return (
    <article ref={contentRef} className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sevvy’s Privacy Disclosure</h1>
      <div className="text-sm text-gray-400 mb-8">Last Updated • 2 min ago</div>
      {/* Section: Scope of This Privacy Disclosure */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Scope of This Privacy Disclosure</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This disclosure applies to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>The Sevvy website</li>
          <li>The Sevvy platform and applications</li>
          <li>All features, tools, and services provided by Sevvy</li>
          <li>Communications with Sevvy, including support and account-related messages</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          This policy applies whether you are a workspace owner, team member, or invited client reviewer.
        </p>
      </section>
      {/* Section: Information We Collect */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed">
          We collect only the information required to operate Sevvy, support your workflows, and maintain platform security.
        </p>
      </section>
      {/* Section: Information You Provide Directly */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Information You Provide Directly</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Name, email, and account credentials</li>
          <li>Company, team, or workspace information</li>
          <li>Billing and subscription data</li>
          <li>Content you upload such as files, videos, feedback, comments, and project data</li>
          <li>Communication with our support or sales teams</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          You control what content you upload, share, and grant access to within your workspace.
        </p>
      </section>
      {/* Section: Information Collected Automatically */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Information Collected Automatically</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Device type, browser type, and operating system</li>
          <li>IP address and general location (city or region level)</li>
          <li>Platform usage data such as features used and actions taken</li>
          <li>Log and security data for monitoring performance and preventing abuse</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          This information is used for reliability, security, and platform improvement. It is not used for advertising.
        </p>
      </section>
      {/* Section: How We Use Your Information */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Create and manage accounts and workspaces</li>
          <li>Enable projects, workflows, feedback, approvals, and publishing</li>
          <li>Process subscriptions and payments</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Improve performance, usability, and reliability</li>
          <li>Maintain platform security and prevent misuse</li>
          <li>Communicate important service or policy updates</li>
        </ul>
        <p className="text-gray-600 leading-relaxed font-bold">Sevvy does not sell personal data. Ever.</p>
      </section>
      {/* Section: Ownership and Handling of Creative Content */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Ownership and Handling of Creative Content</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Your creative content remains yours. Sevvy does not claim ownership over:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Files and assets</li>
          <li>Videos or designs</li>
          <li>Feedback and comments</li>
          <li>Client materials</li>
          <li>Project data or portfolios</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Access to content is governed by workspace permissions and roles that you control.
        </p>
      </section>
      {/* Section: Data Sharing and Third Parties */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Data Sharing and Third Parties</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Sevvy does not sell, rent, or trade personal data. We share limited data only when necessary to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Process payments through secure payment providers</li>
          <li>Host and store data using trusted cloud infrastructure</li>
          <li>Enable integrations you choose to connect</li>
          <li>Comply with legal obligations or enforce platform terms</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          All third-party service providers are contractually required to protect data and use it only for authorized purposes.
        </p>
      </section>
      {/* Section: Integrations and Connected Services */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Integrations and Connected Services</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Google Drive</li>
          <li>Adobe Creative Cloud</li>
          <li>Facebook or other social platforms</li>
          <li>Zoom or screen recording tools</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Sevvy accesses only the minimum data required to support the integration. Access is limited to the duration and scope of the connection and ends when the integration is disconnected.
        </p>
      </section>
      {/* Section: Data Security */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Data Security</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Encryption of data in transit and at rest</li>
          <li>Role-based access controls and permission management</li>
          <li>Secure infrastructure and monitored environments</li>
          <li>Ongoing logging and security monitoring</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          While no system can guarantee absolute security, we continuously work to protect your data, creative assets, and client information.
        </p>
      </section>
      {/* Section: Data Retention */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Data Retention</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Provide Sevvy services</li>
          <li>Comply with legal and regulatory obligations</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          When an account is canceled, data is handled according to our retention and deletion processes, subject to legal requirements.
        </p>
      </section>
      {/* Section: Your Rights and Choices */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Your Rights and Choices</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Access your personal information</li>
          <li>Update or correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Export your data in usable format</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Requests can be made through your account settings or by contacting <span className="font-bold">privacy@sevvy.com</span>.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Sevvy complies with applicable data protection laws, including GDPR and CCPA. We do not discriminate against users for exercising privacy rights.
        </p>
      </section>
      {/* Section: Cookies and Tracking Technologies */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Cookies and Tracking Technologies</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Maintain login sessions</li>
          <li>Support platform functionality</li>
          <li>Improve performance and usability</li>
          <li>Understand how features are used</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          You can manage cookie preferences through your browser settings. Sevvy does not use cookies for third-party advertising.
        </p>
      </section>
      {/* Section: International Data Transfers */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">International Data Transfers</h2>
        <p className="text-gray-600 leading-relaxed">
          Sevvy serves users globally. Information may be processed or stored in multiple regions depending on infrastructure and service providers.
        </p>
        <p className="text-gray-600 leading-relaxed">
          When data is transferred internationally, we apply safeguards designed to ensure consistent data protection standards.
        </p>
      </section>
      {/* Section: Children’s Privacy */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Children’s Privacy</h2>
        <p className="text-gray-600 leading-relaxed">
          Sevvy is intended for professional use and is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.
        </p>
        <p className="text-gray-600 leading-relaxed">
          If you believe a minor has provided data to Sevvy, contact us immediately.
        </p>
      </section>
      {/* Section: Business Transfers */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Business Transfers</h2>
        <p className="text-gray-600 leading-relaxed">
          If Sevvy is involved in a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction. Any transfer will remain subject to this Privacy Disclosure.
        </p>
      </section>
      {/* Section: Changes to This Privacy Disclosure */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Changes to This Privacy Disclosure</h2>
        <p className="text-gray-600 leading-relaxed">
          We update this disclosure to reflect product changes, legal requirements, or operational updates. Material changes will be communicated through the platform or by email. The most current version will always be available on this page.
        </p>
      </section>
      {/* Section: Contact Us */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          If you have questions, concerns, or privacy requests, contact us at:
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Email: <span className="font-bold">privacy@sevvy.com</span>
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Company: <span className="font-bold">ShortVids.co</span>
        </p>
      </section>
      {/* Section: Final Note */}
      <section>
  {/* Border yahan apply kiya gaya hai */}
  <div className="border-2 border-orange-500 rounded-xl p-4">
    <h2 className="text-xl font-semibold text-gray-900  mb-4">Final Note</h2>
    <p className="text-gray-700 leading-relaxed font-semibold">
      Sevvy is built for creative teams that value clarity, control, and trust.<br />
      Protecting your data is part of how we earn that trust every day.
    </p>
  </div>
</section>
    </article>
  );
}

// Main Privacy Page
const PrivacyPage = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  // Smooth scroll to section
  const handleTOCClick = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intersection Observer for active section
  useEffect(() => {
    if (!headings.length) return;
    const observer = new window.IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0.1,
      }
    );
    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 -pt-8 pb-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-0 md:gap-10">
          {/* TOC Sidebar */}
          <div className="md:w-[260px] flex-shrink-0">
            <TableOfContent headings={headings} activeId={activeId} onClick={handleTOCClick} />
          </div>
          {/* Main Content */}
          <div className="flex-1">
            <div className="p-8">
              <PrivacyContent setHeadings={setHeadings} activeId={activeId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
