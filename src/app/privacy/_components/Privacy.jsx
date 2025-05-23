import React from 'react';

// Main Privacy Policy Component
export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-10 lg:p-12">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
          Privacy Policy
        </h1>
       {/*  <p className="text-sm text-gray-600 text-center mb-8">
          <strong>[Your Company Name]</strong><br />
          <strong>[Your Company Address]</strong><br />
          <strong>[Your Company Contact Email/Phone]</strong><br />
          <strong>[Your Website URL]</strong><br />
          <strong>Effective Date: [Date - e.g., May 23, 2025]</strong>
        </p> */}

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Network Resilience ("we," "our," "us") is committed to protecting the privacy and security of the personal data we collect and process. This Privacy Policy describes how we collect, use, disclose, and protect your personal data when you use our networking and ICT services, visit our website, or interact with us.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            By using our services or website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect various types of information from and about users of our services, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Personal Identification Information:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Name, title, company name</li>
                <li>Contact information (email address, phone number, physical address)</li>
                <li>Login credentials (username, password)</li>
                <li>Payment information (billing address, credit card details for processing, though we typically do not store full card numbers)</li>
              </ul>
            </li>
            <li>
              <strong>Technical and Usage Data:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>IP addresses, browser type, operating system</li>
                <li>Device information (device ID, model)</li>
                <li>Website usage data (pages visited, time spent on pages, referral sources)</li>
                <li>Network activity data (connection logs, bandwidth usage, service usage statistics)</li>
                <li>Security event logs</li>
              </ul>
            </li>
            <li>
              <strong>Service-Specific Data:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Configuration data related to networking equipment (routers, switches, firewalls)</li>
                <li>Server logs and performance metrics</li>
                <li>Application usage data</li>
                <li>Help desk inquiries and communication records</li>
              </ul>
            </li>
            <li>
              <strong>Information from Third Parties:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>We may receive information about you from third-party partners (e.g., resellers, business directories) where you have given your consent or where permitted by law.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* How We Collect Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Collect Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect information through various methods:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Directly from you:</strong> When you sign up for services, contact us for support, complete forms, or communicate with us.
            </li>
            <li>
              <strong>Automatically:</strong> As you navigate our website or use our services, we may collect technical and usage data using technologies such as cookies, web beacons, and server logs.
            </li>
            <li>
              <strong>From third parties:</strong> As described above, from partners or publicly available sources.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>To provide and manage our services:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Setting up, maintaining, and providing access to networking and ICT services.</li>
                <li>Managing your accounts and billing.</li>
                <li>Delivering technical support and customer service.</li>
                <li>Monitoring network performance and security.</li>
              </ul>
            </li>
            <li>
              <strong>To improve our services:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Understanding how our services are used to enhance functionality and user experience.</li>
                <li>Developing new features and services.</li>
                <li>Performing research and analysis.</li>
              </ul>
            </li>
            <li>
              <strong>For communication:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Sending important notices, updates, and service-related alerts.</li>
                <li>Responding to your inquiries and requests.</li>
                <li>Sending marketing communications (with your consent, where required).</li>
              </ul>
            </li>
            <li>
              <strong>For security and compliance:</strong>
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Detecting, preventing, and investigating fraud, security breaches, and illegal activities.</li>
                <li>Complying with legal obligations, regulatory requirements, and law enforcement requests.</li>
                <li>Enforcing our terms of service and other policies.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* How We Share Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. How We Share Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your personal data with third parties in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf (e.g., payment processing, hosting, analytics, marketing, IT support). These parties are bound by confidentiality agreements and are only permitted to use your information to fulfill their contractual obligations.
            </li>
            <li>
              <strong>Business Partners:</strong> We may share information with trusted business partners with whom we jointly offer services or engage in joint marketing activities, with your consent where required.
            </li>
            <li>
              <strong>Legal Requirements and Law Enforcement:</strong> We may disclose your information if required to do so by law, in response to a court order, subpoena, or other legal process, or if we believe such action is necessary to comply with a legal obligation, protect our rights, property, or safety, or to investigate potential violations of our policies.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, sale of assets, or bankruptcy, your personal data may be transferred to the new entity.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share your information with other third parties when we have your explicit consent to do so.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable technical and organizational measures designed to protect your personal data from unauthorized access, use, alteration, and disclosure. These measures include encryption, access controls, secure coding practices, and regular security audits.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. The retention period will vary depending on the type of data and the purpose of processing.
          </p>
        </section>

        {/* Your Data Protection Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Data Protection Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your jurisdiction, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data.
            </li>
            <li>
              <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request the deletion of your personal data under certain circumstances.
            </li>
            <li>
              <strong>Right to Restriction of Processing:</strong> Request that we limit the way we use your personal data.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Request that we transfer your personal data to another organization.
            </li>
            <li>
              <strong>Right to Object:</strong> Object to the processing of your personal data for certain purposes (e.g., direct marketing).
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process your personal data, you have the right to withdraw that consent at any time.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise these rights, please contact us using the details provided in Section 11. We may require you to verify your identity before processing your request.
          </p>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use "cookies" and similar tracking technologies to enhance your experience, analyze website usage, and for marketing purposes. You can control the use of cookies through your browser settings. Please refer to our separate{' '}
            <a href="[Your Cookie Policy Link]" className="text-blue-600 hover:underline">
              [Cookie Policy Link - *if you have one, otherwise integrate basic cookie info here*]
            </a>{' '}
            for more details.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites or services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@[yourcompany.com]" className="text-blue-600 hover:underline">
                privacy@[yourcompany.com]
              </a>
            </li>
            <li>
              <strong>Phone:</strong> [Your Company Phone Number]
            </li>
            <li>
              <strong>Postal Address:</strong> [Your Company Address]
            </li>
          </ul>
        </section>

        {/* Changes to This Privacy Policy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>
      </div>
    </div>
  );
};