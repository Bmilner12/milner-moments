import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/TermsPage.css';  // Reusing the same styling

const CookiesPage = () => {
  return (
    <div className="terms-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Cookies Policy</h1>
          <p className="page-subtitle">How we use cookies and similar technologies on our website</p>
        </div>
      </div>
      
      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>This Cookie Policy explains how MilnerMoments Photography ("we", "us", or "our") uses cookies and similar technologies when you visit our website <a href="https://www.milnermoments.co.uk">www.milnermoments.co.uk</a> ("the Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
            <p>By continuing to use our Website, you agree to our use of cookies and similar technologies in accordance with this policy.</p>
          </div>
          
          <div className="terms-section">
            <h2>2. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
            <p>Cookies allow a website to recognise your device and remember if you've been to the website before. They can be used to store your preferences, remember what's in your shopping basket, help you navigate between pages efficiently, and generally improve your browsing experience.</p>
            <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you have closed your browser, while session cookies are deleted as soon as you close your browser.</p>
          </div>
          
          <div className="terms-section">
            <h2>3. Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our Website:</p>
            
            <h3>3.1 Essential Cookies</h3>
            <p>These cookies are necessary for the Website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the Website functions.</p>
            <table className="cookies-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JSESSIONID</td>
                  <td>Preserves user session state across page requests</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>csrf-token</td>
                  <td>Helps prevent Cross-Site Request Forgery attacks</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>
            
            <h3>3.2 Analytical/Performance Cookies</h3>
            <p>These cookies allow us to recognise and count the number of visitors to our Website and see how visitors move around when they're using it. This helps us improve the way our Website works, for example, by ensuring that users find what they are looking for easily.</p>
            <table className="cookies-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Used by Google Analytics to throttle request rate</td>
                  <td>1 minute</td>
                </tr>
              </tbody>
            </table>
            
            <h3>3.3 Functionality Cookies</h3>
            <p>These cookies enable the Website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.</p>
            <table className="cookies-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>preferences</td>
                  <td>Stores user preferences for website functionality</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
            
            <h3>3.4 Marketing Cookies</h3>
            <p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
            <table className="cookies-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_fbp</td>
                  <td>Used by Facebook to deliver advertisements</td>
                  <td>3 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="terms-section">
            <h2>4. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website and deliver advertisements on and through the Website.</p>
            <p>These third parties may include:</p>
            <ul>
              <li><strong>Google Analytics</strong>: We use Google Analytics to help us understand how visitors engage with our Website. Google Analytics uses cookies to collect information about visitor behavior. Google Analytics does not identify individual users or associate your IP address with any other data held by Google.</li>
              <li><strong>Social Media Platforms</strong>: Our Website includes features that enable you to share content on platforms such as Facebook, Instagram, and Twitter. These platforms may set cookies on your device when you use these features.</li>
              <li><strong>Payment Processors</strong>: If you make a payment through our Website, our payment processors may use cookies to process your transaction.</li>
            </ul>
            <p>These third-party services are outside of our control. We encourage you to check the privacy policies and cookie policies of these third parties to understand how they use cookies and how they process your information.</p>
          </div>
          
          <div className="terms-section">
            <h2>5. How to Manage Cookies</h2>
            <p>Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.</p>
            <p>You can generally find how to manage cookies in the "Settings," "Preferences," or "Options" menus of your browser. The following links provide information on how to manage cookies in commonly used browsers:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Microsoft Internet Explorer</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p>Please note that blocking or deleting cookies may impact your experience on our Website, as some features may not function correctly.</p>
            
            <h3>5.1 Managing Analytics Cookies</h3>
            <p>To opt out of being tracked by Google Analytics across all websites, you can visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          </div>
          
          <div className="terms-section">
            <h2>6. Changes to Our Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.</p>
            <p>We encourage you to check this page periodically to stay informed about our use of cookies.</p>
          </div>
          
          <div className="terms-section">
            <h2>7. Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
            <p>
              Email: <a href="mailto:milner.moments@outlook.com">milner.moments@outlook.com</a><br />
              Phone: <a href="tel:07491798234">07491 798234</a>
            </p>
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

export default CookiesPage;