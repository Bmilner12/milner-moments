import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Terms and Conditions</h1>
          <p className="page-subtitle">Please read these terms carefully before booking our services</p>
        </div>
      </div>
      
      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>These Terms and Conditions govern your use of services provided by MilnerMoments Photography ("we," "our," or "us"). By engaging our services, you ("the client") agree to these terms in full. If you disagree with any part of these terms, please do not use our services.</p>
          </div>
          
          <div className="terms-section">
            <h2>2. Booking and Payment</h2>
            <p><strong>2.1 Securing Your Booking</strong>: A non-refundable deposit of 50% of the total session fee is required to secure your booking date and time. The remaining balance is due on or before the day of the photography session.</p>
            <p><strong>2.2 Payment Methods</strong>: We accept bank transfers, credit/debit cards, and PayPal payments.</p>
            <p><strong>2.3 Additional Costs</strong>: Any additional services requested after the initial booking may incur extra charges. These will be agreed upon in writing before proceeding.</p>
            <p><strong>2.4 Travel Fees</strong>: For locations beyond 15 miles from Leeds, West Yorkshire, additional travel fees may apply at a rate of £0.45 per mile.</p>
          </div>
          
          <div className="terms-section">
            <h2>3. Cancellation and Rescheduling</h2>
            <p><strong>3.1 Cancellation by Client</strong>: If you cancel your booking:</p>
            <ul>
              <li>More than 14 days before the session: You will lose your deposit but have no further liability.</li>
              <li>Less than 14 days before the session: The full session fee is due.</li>
            </ul>
            <p><strong>3.2 Rescheduling</strong>: Rescheduling is free with at least 48 hours notice. With less than 48 hours notice, a £25 rescheduling fee may apply.</p>
            <p><strong>3.3 Cancellation by Photographer</strong>: If we need to cancel due to illness, injury, or other exceptional circumstances, we will offer you the option to reschedule or receive a full refund, including your deposit.</p>
            <p><strong>3.4 Weather Conditions</strong>: For outdoor sessions affected by adverse weather, we will reschedule at no extra cost. The decision to reschedule due to weather will be made by the photographer.</p>
          </div>
          
          <div className="terms-section">
            <h2>4. The Photography Session</h2>
            <p><strong>4.1 Duration</strong>: The session duration is as specified in your booking. Sessions that run over the agreed time due to client delays may incur additional fees upon the discression of the photographer.</p>
            <p><strong>4.2 Attendance</strong>: For pet photography, the pet owner must be present throughout the session. For wildlife photography, clients must follow safety instructions and stay within designated areas.</p>
            <p><strong>4.3 Behavior</strong>: We reserve the right to terminate a session if there is abusive, threatening, or inappropriate behavior with no refund provided.</p>
            <p><strong>4.4 Cooperation</strong>: The quality of our photographs depends on your cooperation. We cannot be held responsible for compromised quality due to lack of cooperation or unavoidable circumstances.</p>
          </div>
          
          <div className="terms-section">
            <h2>5. Images and Deliverables</h2>
            <p><strong>5.1 Image Selection</strong>: The photographer has full artistic license and will select the images presented to you. The number of final images will depend on your package but is typically as specified in your booking.</p>
            <p><strong>5.2 Editing</strong>: Basic editing (color correction, exposure adjustment, etc.) is included. Extensive retouching or special effects may incur additional charges.</p>
            <p><strong>5.3 Delivery Timeframes</strong>: Preview images will be available within 2 weeks of your session. Final edited images will be ready within 1-2 weeks after your selections are made. Express editing may incure additional charges.</p>
            <p><strong>5.4 Image Storage</strong>: We will keep your images on file for up to 12 months after delivery. After this period, we cannot guarantee their availability. We strongly recommend you make your own backups.</p>
          </div>
          
          <div className="terms-section">
            <h2>6. Copyright and Usage Rights</h2>
            <p><strong>6.1 Copyright</strong>: In accordance with UK Copyright Law, the photographer retains copyright of all images created.</p>
            <p><strong>6.2 Personal Use License</strong>: Clients receive a personal use license that allows you to print and share images for personal purposes. This does not include commercial use without written permission.</p>
            <p><strong>6.3 Commercial Usage</strong>: Commercial usage rights may be purchased separately. Please contact us for pricing.</p>
            <p><strong>6.4 Social Media</strong>: You may share images on social media platforms for personal use, provided you credit "Milner Moments Photography" where possible.</p>
            <p><strong>6.5 Portfolio Use</strong>: We reserve the right to use images from your session in our portfolio, website, social media, and marketing materials unless explicitly agreed otherwise in writing.</p>
          </div>
          
          <div className="terms-section">
            <h2>7. Privacy and Data Protection</h2>
            <p><strong>7.1 Personal Information</strong>: We collect and process personal information in accordance with our <a href="/privacy">Privacy Policy</a> and UK data protection laws.</p>
            <p><strong>7.2 Image Privacy</strong>: If you do not wish for your images to be used in our marketing materials or portfolio, please inform us in writing before your session.</p>
          </div>
          
          <div className="terms-section">
            <h2>8. Liability and Insurance</h2>
            <p><strong>8.1 Equipment Failure</strong>: While we take all reasonable care, we cannot be held liable for technical failures, including but not limited to camera or storage device failure.</p>
            <p><strong>8.2 Force Majeure</strong>: We cannot be held liable for delays or failure to deliver services due to circumstances beyond our reasonable control.</p>
            <p><strong>8.3 Property Damage</strong>: The client is responsible for any damage caused to the photographer's equipment by themselves, their pets, or other participants during the session.</p>
            <p><strong>8.4 Personal Injuries</strong>: The photographer assumes no liability for personal injuries or property damage occurring during a photography session.</p>
          </div>
          
          <div className="terms-section">
            <h2>9. Complaints</h2>
            <p>If you are dissatisfied with our service, please raise your concerns in writing within 14 days of receiving your final images. We will do our best to resolve any issues promptly and fairly.</p>
          </div>
          
          <div className="terms-section">
            <h2>10. Changes to Terms and Conditions</h2>
            <p>We reserve the right to modify these terms at any time. Any changes will be posted on our website and will be effective immediately.</p>
          </div>
          
          <div className="terms-section">
            <h2>11. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
          
          <div className="terms-section">
            <h2>12. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p>Email: <a href="mailto:milner.moments@outlook.com">milner.moments@outlook.com</a><br />
            Phone: <a href="tel:07491798234">07491 798234</a></p>
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

export default TermsPage;