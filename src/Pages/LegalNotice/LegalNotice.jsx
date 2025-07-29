import React from 'react';

import { Helmet } from 'react-helmet-async';

const LegalNotice = () => {
  return (
    <div className="container my-5 px-4">

                        <Helmet>
                    <title>Senvotex | Legal-Notice</title>
                  </Helmet>


      <div className="p-sm-5 p-3 bg-light rounded-4 shadow-sm border border-1 border-secondary-subtle">
        <h2 className="mb-4 fw-bold border-bottom pb-4 text-center" style={{color: '#343434'}}>
          <i className="fas fa-file-alt me-2" style={{color: '#343434'}}></i>
          Legal Notice / Impressum
        </h2>

        <div className="mb-3">
          <p><i className="fas fa-building me-2 text-black"></i><strong>Business Name:</strong> Senvotex Digital</p>
          <p><i className="fas fa-user-circle me-2 text-black"></i><strong>Business Owner:</strong> Raja Shehryar Ahmed</p>
          <p><i className="fas fa-map-marker-alt me-2 text-black"></i><strong>Registered Address:</strong> Karachi, Sindh, Pakistan</p>
          <p>
            <i className="fas fa-envelope me-2 text-black"></i>
            <strong>Email:</strong>{' '}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=digital@senvotex.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
              digital@senvotex.com
            </a>
          </p>
          <p>
            <i className="fas fa-globe me-2 text-black"></i>
            <strong>Website:</strong>{' '}
            <a href="https://www.senvotex.com" className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
              www.senvotex.com
            </a>
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold">Business Activity</h5>
          <p className="text-muted">
            Provision of digital services, including but not limited to website development, SEO, and AI solutions for international clients.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold">Disclaimer</h5>
          <p className="text-muted">
            The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up-to-date, Senvotex Digital makes no warranties regarding the completeness, reliability, or accuracy of the information.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold">Copyright Notice</h5>
          <p className="text-muted">
            All content, design elements, graphics, and media are the intellectual property of Senvotex Digital unless explicitly stated otherwise. Unauthorized use, reproduction, or distribution is strictly prohibited without prior written consent.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold">External Links Disclaimer</h5>
          <p className="text-muted">
            This website may contain links to third-party websites. We have no control over the content or privacy practices of external sites and assume no responsibility for them. Users access these links at their own risk.
          </p>
        </div>

        <p className="text-muted small mt-4">
          This legal notice complies with international transparency standards and is subject to change without prior notice.
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
