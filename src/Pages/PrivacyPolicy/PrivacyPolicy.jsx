import React from 'react';
import './PrivacyPolicy.css';

import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5 privacy-policy">

                        <Helmet>
                    <title>Senvotex | Privacy-Policy</title>
                  </Helmet>


      <div className="bg-light p-5 rounded-4 shadow-sm border border-secondary-subtle">
        <h1 className="mb-4 text-center border-bottom pb-4 fw-bold">
          <i className="fas fa-file-alt me-2" style={{color: '#343434'}}></i>
          Privacy Policy</h1>

        <p className="lead text-muted">
          At <strong className='fw-bold' style={{color: '#333333'}}>Senvotex Digital</strong>, we are committed to protecting your privacy and ensuring transparency in how we handle your data. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <div className="mt-5">
          <h4 className="fw-semibold mb-2">1. Information We Collect</h4>
          <p>
            We may collect your name, email address, phone number, and project details when you contact us through our website, social media, or WhatsApp. We do not collect sensitive personal data unless required to provide specific services.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-semibold mb-2">2. How We Use Your Information</h4>
          <p>
            We use the information to communicate with you, understand your project needs, and deliver our services effectively. We do not share, sell, or rent your information to any third parties.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-semibold mb-2">3. Cookies and Analytics</h4>
          <p>
            Our website may use cookies or third-party tools (e.g., Google Analytics) to understand how visitors interact with our site and improve user experience. You can disable cookies through your browser settings if you prefer.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-semibold mb-2">4. Data Security</h4>
          <p>
            We take reasonable measures to protect your data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-semibold mb-2">5. Your Rights</h4>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data. For any such requests, please email us at{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=digital@senvotex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              digital@senvotex.com
            </a>.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-semibold mb-2">6. Changes to This Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. The latest version will always be available on our website.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="fw-semibold">Contact Us</h4>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, please contact us:
          </p>

          <ul className="list-unstyled fs-6">
            <li className="mb-2">
              <i className="fas fa-globe me-2 text-dark" style={{ fontSize: '18px' }}></i>
              <a href="https://www.senvotex.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                www.senvotex.com
              </a>
            </li>

            <li className="mb-2">
              <i className="fas fa-envelope me-2 text-dark" style={{ fontSize: '18px' }}></i>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=digital@senvotex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                digital@senvotex.com
              </a>
            </li>

            <li className="mb-2">
              <i className="fab fa-instagram me-2 text-dark" style={{ fontSize: '18px' }}></i>
              <a href="https://instagram.com/senvotex.digital" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                @senvotex.digital
              </a>
            </li>

            <li className="mb-2">
              <i className="fab fa-facebook me-2 text-dark" style={{ fontSize: '18px' }}></i>
              <a href="https://facebook.com/senvotex.digital" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                facebook.com/senvotex.digital
              </a>
            </li>

            <li className="mb-2">
              <i className="fab fa-linkedin me-2 text-dark" style={{ fontSize: '18px' }}></i>
              <a href="https://linkedin.com/company/senvotexdigital" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                linkedin.com/company/senvotexdigital
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
