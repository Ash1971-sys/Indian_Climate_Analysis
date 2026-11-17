import React, { useState } from 'react';
import divyanshImage from './assets/divyansh.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Increase left offset for better centering
  const leftOffset = typeof window !== 'undefined' && window.innerWidth >= 992 ? 180 : 0;
  
  const features = [
    {
      icon: "🌍",
      title: "Comprehensive Coverage",
      description: "All India coverage spanning over 700+ districts with verified meteorological and climate metrics."
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      description: "Interactive climate summaries featuring violin plots, radiation charts, wind profiles, and hourly heatmaps."
    },
    {
      icon: "🏗️",
      title: "Climate Classification",
      description: "Built-in climate zone classification aligned with contemporary building thermal performance criteria."
    },
    {
      icon: "🌡️",
      title: "Psychrometric Analysis",
      description: "Interactive bioclimatic psychrometric charts with passive cooling and heating design strategy overlays."
    }
  ];

  const sources = [
    {
      name: "ISHRAE",
      url: "https://www.ishrae.in/",
      logo: "/ishrae.png",
      description: "Indian Society of Heating, Refrigerating and Air Conditioning Engineers"
    },
    {
      name: "ASHRAE",
      url: "https://www.ashrae.org/",
      logo: "/ashrae.png",
      description: "American Society of Heating, Refrigerating and Air-Conditioning Engineers"
    },
    {
      name: "COLBE",
      url: "https://colbe.bath.ac.uk/",
      logo: "/colbe.png",
      description: "Climate and Outdoor Laboratory for Building Engineering"
    }
  ];

  return (
    <div className="container py-4" style={{ marginLeft: leftOffset }}>
      <div className="mx-auto" style={{maxWidth: 1000}}>
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary mb-3">
            About Indian Climate Analysis
          </h1>
          <div className="lead text-muted mb-4" style={{fontSize: 18, lineHeight: 1.6}}>
            Empowering architects, building energy consultants, environmental researchers, and policymakers with 
            <span className="fw-semibold text-primary"> accurate, high-resolution climatic intelligence</span> for climate-responsive and sustainable building design.
          </div>
          <div className="bg-light rounded-3 p-3 d-inline-block shadow-sm">
            <span className="badge bg-primary me-2">Independent Project</span>
            <span className="badge bg-success me-2">All-India Coverage</span>
            <span className="badge bg-info me-2">Verified Climate Data</span>
            <span className="badge bg-dark">Open Source</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills nav-fill mb-4" id="aboutTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
              type="button"
            >
              <i className="bi bi-info-circle me-2"></i>Overview
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
              type="button"
            >
              <i className="bi bi-star me-2"></i>Features
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'developer' ? 'active' : ''}`}
              onClick={() => setActiveTab('developer')}
              type="button"
            >
              <i className="bi bi-person-badge me-2"></i>Developer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'sources' ? 'active' : ''}`}
              onClick={() => setActiveTab('sources')}
              type="button"
            >
              <i className="bi bi-link-45deg me-2"></i>Data Sources & References
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="aboutTabContent">
          
          {/* Overview Tab */}
          <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`}>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-3">
                      <i className="bi bi-lightbulb me-2"></i>Project Mission
                    </h3>
                    <p className="card-text text-secondary" style={{fontSize: 16, lineHeight: 1.8}}>
                      The <strong>Indian Climate Analysis Platform</strong> was conceived and developed as an independent,
                      end-to-end data platform bridging the gap between raw meteorological datasets and practical application
                      in passive, energy-efficient architecture across India.
                    </p>
                    <p className="card-text text-secondary" style={{fontSize: 16, lineHeight: 1.8}}>
                      By centralizing verified weather files, interactive geospatial visualizations, and advanced bioclimatic
                      algorithms, this platform provides practitioners and enthusiasts with immediate access to district-level
                      climate classifications, comfort zone overlays, and multi-format data exports (EPW, BINM, CSV).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title text-primary mb-3">
                      <i className="bi bi-graph-up me-2"></i>Key Metrics
                    </h4>
                    <div className="d-flex flex-column gap-3">
                      <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                        <div className="h3 text-primary mb-1">700+</div>
                        <div className="text-muted small">Districts Mapped</div>
                      </div>
                      <div className="text-center p-3 bg-success bg-opacity-10 rounded">
                        <div className="h3 text-success mb-1">3 Formats</div>
                        <div className="text-muted small">EPW · BINM · CSV</div>
                      </div>
                      <div className="text-center p-3 bg-info bg-opacity-10 rounded">
                        <div className="h3 text-info mb-1">Interactive</div>
                        <div className="text-muted small">Psychrometric Engine</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Tab */}
          <div className={`tab-pane fade ${activeTab === 'features' ? 'show active' : ''}`}>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4 text-center">
                      <div className="display-6 mb-3">{feature.icon}</div>
                      <h5 className="card-title text-primary mb-3">{feature.title}</h5>
                      <p className="card-text text-muted" style={{fontSize: 14, lineHeight: 1.6}}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Tab */}
          <div className={`tab-pane fade ${activeTab === 'developer' ? 'show active' : ''}`}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm hover-lift">
                  <div className="card-body p-4 p-md-5">
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img 
                          src={divyanshImage} 
                          alt="Divyansh Vijay"
                          className="rounded-circle shadow"
                          style={{
                            width: '140px',
                            height: '140px',
                            objectFit: 'cover',
                            border: '4px solid #fff'
                          }}
                        />
                        <h4 className="fw-bold text-primary mt-3 mb-1">Divyansh Vijay</h4>
                        <div className="badge bg-primary-subtle text-primary mb-2">Creator & Lead Developer</div>
                      </div>
                      <div className="col-md-8">
                        <h5 className="text-dark fw-semibold mb-3">About the Creator</h5>
                        <p className="text-secondary" style={{fontSize: 15, lineHeight: 1.7}}>
                          Independent full-stack developer and climate data enthusiast who conceptualized, architected, 
                          and engineered the <strong>Indian Climate Analysis</strong> platform from the ground up.
                        </p>
                        <p className="text-secondary" style={{fontSize: 15, lineHeight: 1.7}}>
                          Passionate about software systems that solve tangible environmental problems, combining full-stack web technologies 
                          (React, Vite, Node.js, Express) with data science engines (Python, D3.js, Plotly) to make complex scientific data intuitive and accessible.
                        </p>
                        <div className="d-flex flex-wrap gap-2 pt-2">
                          <a 
                            href="mailto:divyanshvijay92@gmail.com" 
                            className="btn btn-sm btn-outline-primary"
                          >
                            <i className="bi bi-envelope me-1"></i> Email
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/divyansh-vijay-17187b227" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary"
                          >
                            <i className="bi bi-linkedin me-1"></i> LinkedIn
                          </a>
                          <a 
                            href="https://github.com/Ash1971-sys/Indian_Climate_Analysis" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-dark"
                          >
                            <i className="bi bi-github me-1"></i> GitHub Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sources Tab */}
          <div className={`tab-pane fade ${activeTab === 'sources' ? 'show active' : ''}`}>
            {/* Research Reference Section */}
            <div className="mb-4">
              <h5 className="text-success mb-2">
                <i className="bi bi-journal-text me-2"></i>Research Reference & Methodology
              </h5>
              <p className="text-muted mb-2">
                The climate zone classification criteria and building thermal performance benchmarks implemented in this platform reference published scientific literature:
              </p>
              <div className="bg-light rounded p-3 border-start border-4 border-primary">
                <small className="text-muted">
                  <strong>R. Gupta, J. Mathur, and V. Garg</strong>, "A criteria-based climate classification approach 
                  considering clustering and building thermal performance: Case of India", 
                  <em>Build. Environ.</em>, vol. 270, no. December 2024, p. 112512, 2025.
                </small>
                <br/>
                <a 
                  href="https://doi.org/10.1016/j.buildenv.2024.112512" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary mt-2"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>View Publication
                </a>
              </div>
            </div>

            {/* Data Sources List */}
            <h5 className="text-primary mb-3">
              <i className="bi bi-database me-2"></i>Meteorological & Climate Data Sources
            </h5>
            <div className="row g-4">
              {sources.map((source, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4 text-center">
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <img 
                          src={source.logo} 
                          alt={`${source.name} Logo`} 
                          className="img-fluid rounded bg-light p-3 border mb-3" 
                          style={{height: 80, objectFit: 'contain', transition: 'transform 0.2s'}}
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                      </a>
                      <h5 className="card-title text-primary mb-2">{source.name}</h5>
                      <p className="card-text text-muted small" style={{lineHeight: 1.5}}>
                        {source.description}
                      </p>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-lift {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .nav-pills .nav-link {
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
        }
        .nav-pills .nav-link:hover {
          transform: translateY(-1px);
        }
        .card {
          transition: all 0.2s ease-in-out;
        }
        .badge {
          font-size: 0.8rem;
          padding: 0.5rem 0.75rem;
        }
      `}</style>
    </div>
  );
}
