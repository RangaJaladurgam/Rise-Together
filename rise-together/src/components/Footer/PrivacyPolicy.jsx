import React from 'react';
import './Footer.css';
const PrivacyPolicy = () => {
    return (
      <div className="content">
        <h2 className="">Privacy Policy</h2>
        <p className="description">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>
  
        <h3 className="">Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, and any other details you provide when contacting us or using our services.
        </p>
  
        <h3 className="">How We Use Your Information</h3>
        <p>
          The information we collect is used to:
        </p>
        <ul className="policy-list">
          <li>Respond to your inquiries and provide support.</li>
          <li>Improve our website and services.</li>
          <li>Send updates, newsletters, or promotional content (only if you opt-in).</li>
        </ul>
  
        <h3 className="">Protecting Your Information</h3>
        <p>
          We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
  
        <h3 className="">Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before sharing any information.
        </p>
  
        <h3 className="">Your Consent</h3>
        <p>
          By using our website, you consent to the terms of this Privacy Policy.
        </p>
  
        <h3 className="">Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>
  
        <h3 className="">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please <a href="mailto:your-email@example.com">contact us</a>.
        </p>
      </div>
    );
  };

  export default PrivacyPolicy;