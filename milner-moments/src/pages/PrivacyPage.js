import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/TermsPage.css';  // We can reuse the same styling

const PrivacyPage = () => {
  return (
    <div className="terms-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">How we collect, use, and protect your personal information</p>
        </div>
      </div>
      
      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>At MilnerMoments Photography ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services or visit our website.</p>
            <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.</p>
          </div>
          
          <div className="terms-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website and services, including:</p>
            
            <h3>2.1 Personal Information</h3>
            <p>This includes information that can identify you as an individual, such as:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address</li>
              <li>Payment information (we do not store complete payment details)</li>
            </ul>
            
            <h3>2.2 Photography Content</h3>
            <p>When providing photography services, we create and store images that may contain personal data in the form of:</p>
            <ul>
              <li>Photographs of you, your family, or your pets</li>
              <li>Images of your property or belongings</li>
              <li>Location information embedded in image metadata</li>
            </ul>
            
            <h3>2.3 Technical Data</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Page interaction information</li>
              <li>Time spent on pages</li>
            </ul>
            
            <h3>2.4 Marketing and Communications Data</h3>
            <p>This includes your preferences in receiving marketing from us and our communication preferences.</p>
          </div>
          
          <div className="terms-section">
            <h2>3. How We Collect Your Information</h2>
            <p>We collect information from you in several ways:</p>
            <ul>
              <li><strong>Direct interactions</strong>: When you fill in forms on our website, correspond with us by phone, email, or otherwise.</li>
              <li><strong>Photography sessions</strong>: During the course of providing our photography services.</li>
              <li><strong>Automated technologies</strong>: As you interact with our website, we may automatically collect technical data about your equipment, browsing actions, and patterns.</li>
              <li><strong>Third parties</strong>: We may receive information about you from various third parties such as payment processors or social media platforms if you interact with our content there.</li>
            </ul>
          </div>
          
          <div className="terms-section">
            <h2>4. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To process and complete transactions</li>
              <li>To communicate with you about appointments, services, and promotions</li>
              <li>To create and deliver the photography products you have ordered</li>
              <li>To improve our website and services</li>
              <li>To respond to your enquiries and customer service requests</li>
              <li>To send marketing communications if you have opted in</li>
              <li>To protect our rights and comply with legal obligations</li>
            </ul>
            
            <h3>4.1 Legal Basis for Processing</h3>
            <p>We process your personal data based on one or more of the following legal grounds:</p>
            <ul>
              <li><strong>Contract performance</strong>: Processing necessary for the performance of a contract to which you are a party.</li>
              <li><strong>Legitimate interests</strong>: Processing necessary for our legitimate interests, provided these interests don't override your fundamental rights and freedoms.</li>
              <li><strong>Consent</strong>: Where you have given us consent to process your data for specific purposes.</li>
              <li><strong>Legal obligation</strong>: Processing necessary to comply with a legal obligation.</li>
            </ul>
          </div>
          
          <div className="terms-section">
            <h2>5. How We Share Your Information</h2>
            <p>We do not sell your personal information to third parties. However, we may share your information in the following situations:</p>
            <ul>
              <li><strong>Service providers</strong>: We may share your information with trusted third-party service providers who help us operate our business, such as payment processors, cloud storage providers, and email service providers.</li>
              <li><strong>Professional advisers</strong>: Including lawyers, accountants, and insurers who provide legal, accounting, and insurance services.</li>
              <li><strong>Legal compliance</strong>: We may disclose your information when required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business transfers</strong>: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>
            
            <p>All third parties with whom we share your data are required to respect the security of your personal information and to treat it in accordance with the law.</p>
          </div>
          
          <div className="terms-section">
            <h2>6. Data Retention</h2>
            <p>We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
            <p>For photography services, we typically retain:</p>
            <ul>
              <li>Raw photographic files for up to 60 days after delivery of final images</li>
              <li>Edited final images for up to 12 months</li>
              <li>Contact information for up to 7 years for tax and accounting purposes</li>
            </ul>
            <p>After these periods, your data will be securely deleted or anonymized.</p>
          </div>
          
          <div className="terms-section">
            <h2>7. Your Rights</h2>
            <p>Under UK and EU data protection laws, you have certain rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to access</strong>: You can request a copy of the personal information we hold about you.</li>
              <li><strong>Right to rectification</strong>: You can ask us to correct any inaccurate or incomplete information.</li>
              <li><strong>Right to erasure</strong>: In certain circumstances, you can ask us to delete your personal information.</li>
              <li><strong>Right to restrict processing</strong>: You can ask us to suspend processing of your personal information.</li>
              <li><strong>Right to data portability</strong>: You can request the transfer of your information to another party.</li>
              <li><strong>Right to object</strong>: You can object to our processing of your personal data in certain circumstances.</li>
              <li><strong>Right to withdraw consent</strong>: Where we rely on your consent to process your data, you can withdraw this at any time.</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided in section 12.</p>
          </div>
          
          <div className="terms-section">
            <h2>8. Marketing Communications</h2>
            <p>We may send you marketing communications if you have:</p>
            <ul>
              <li>Requested information from us</li>
              <li>Used our services</li>
              <li>Provided us with your details when filling out a contact form</li>
              <li>Explicitly opted in to receive marketing communications</li>
            </ul>
            <p>You can opt out of these communications at any time by:</p>
            <ul>
              <li>Clicking the "unsubscribe" link in any marketing email</li>
              <li>Contacting us directly to request removal from marketing lists</li>
            </ul>
          </div>
          
          <div className="terms-section">
            <h2>9. Cookies and Similar Technologies</h2>
            <p>Our website uses cookies and similar technologies to distinguish you from other users of our website. This helps us provide you with a good experience when browsing and also allows us to improve our site.</p>
            <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your device. We use the following types of cookies:</p>
            <ul>
              <li><strong>Strictly necessary cookies</strong>: Required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies</strong>: Allow us to recognise and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality cookies</strong>: Enable us to personalise our content for you.</li>
              <li><strong>Targeting cookies</strong>: Record your visit to our website, the pages you have visited, and the links you have followed.</li>
            </ul>
            <p>You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
          </div>
          
          <div className="terms-section">
            <h2>10. Data Security</h2>
            <p>We have implemented appropriate security measures to prevent your personal information from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
            <p>We limit access to your personal information to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal information on our instructions, and they are subject to a duty of confidentiality.</p>
            <p>We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
          </div>
          
          <div className="terms-section">
            <h2>11. Children's Privacy</h2>
            <p>Our services are not intended for children under 16 years of age without parental consent. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us.</p>
          </div>
          
          <div className="terms-section">
            <h2>12. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p>
              Email: <a href="mailto:milner.moments@outlook.com">milner.moments@outlook.com</a><br />
              Phone: <a href="tel:07491798234">07491 798234</a>
            </p>
          </div>
          
          <div className="terms-section">
            <h2>13. Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy from time to time by posting a new version on our website. You should check this page occasionally to ensure you are happy with any changes.</p>
          </div>
          
          <div className="terms-footer">
            <p>Last updated: March 2025</p>
            <p>© Milner Moments Photography. All rights reserved.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;