const projects = [
  {
    number: "01",
    category: "Industrial automation",
    title: "Automatic Bottle Filling Machine",
    summary:
      "A PLC-based filling system built to make a repetitive industrial process more consistent, observable, and efficient.",
    impact: "~60% less manual intervention",
    details: [
      "Ladder logic for reliable sequence control",
      "Sensor and timer integration",
      "Process-focused automation design",
    ],
    tags: ["PLC", "Ladder Logic", "Sensors"],
  },
  {
    number: "02",
    category: "Digital design",
    title: "Pipelined MAC Array",
    summary:
      "A high-speed multiply-accumulate architecture designed for image-processing workloads and improved throughput.",
    impact: "Throughput optimized by pipelining",
    details: [
      "High-speed MAC architecture",
      "Pipeline-stage design",
      "Digital design optimization",
    ],
    tags: ["MAC", "Pipelining", "Image Processing"],
  },
  {
    number: "03",
    category: "Applied AI automation",
    title: "Telegram / WhatsApp Chatbot",
    summary:
      "A Python chatbot architecture for real-time interaction and automated business query handling.",
    impact: "Scalable webhook-driven logic",
    details: [
      "Telegram deployment",
      "Automated query handling",
      "WhatsApp Business API exploration",
    ],
    tags: ["Python", "REST APIs", "Webhooks"],
  },
];

const enterpriseProjects = [
  {
    number: "01",
    eyebrow: "ERP · Inventory",
    title: "Impetus Shortlist System",
    summary:
      "A material-tracking and inventory workflow delivered both inside the Impetus ERP ecosystem and as a standalone application.",
    outcome:
      "One operational workflow, designed for integrated and standalone use.",
    details: [
      "Modelled material allocation and shortlist workflows",
      "Designed a PostgreSQL schema for reliable, current inventory data",
      "Built a responsive interface for desktop and mobile teams",
    ],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    accent: "blue",
  },
  {
    number: "02",
    eyebrow: "ERP · Collaboration",
    title: "Impetus SO Notes System",
    summary:
      "Shared sales-order documentation with author attribution, complete timelines, and an audit-ready history of changes.",
    outcome:
      "Clearer team context and traceable decisions inside an existing ERP flow.",
    details: [
      "Implemented collaborative notes with author tracking",
      "Captured modifications and user actions for review",
      "Integrated the experience into the existing ERP interface",
    ],
    tags: ["Express", "PostgreSQL", "Next.js", "Audit trails"],
    accent: "cyan",
  },
  {
    number: "03",
    eyebrow: "ERP · Procurement",
    title: "PO Approval & Workflow System",
    summary:
      "A purchase-order approval platform with parallel multi-stage reviews across Technical, Director, Cost, and Final Approver teams.",
    outcome:
      "Parallel routing removes sequential review bottlenecks while preserving a complete decision history.",
    details: [
      "Configured department assignments and role-based access per PO",
      "Tracked approvals, rejections, forwarding actions, users, and timestamps",
      "Enabled rejected POs to be resubmitted without losing voting history",
      "Secured access with JWT authentication and bcrypt password hashing",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "JWT"],
    accent: "violet",
  },
  {
    number: "04",
    eyebrow: "Manufacturing · Analytics",
    title: "Golden Batch CP6ML Dashboard",
    summary:
      "A production analytics dashboard for the CP6ML shampoo line on Mixer-4, connecting batch data with quality variables.",
    outcome:
      "Analysis identified salt short-charge as the dominant production variable.",
    details: [
      "Created an interactive Streamlit monitoring experience",
      "Structured production batch data in SQLite",
      "Connected pH specifications with production outcomes",
    ],
    tags: ["Python", "Streamlit", "SQLite", "Data analysis"],
    accent: "coral",
  },
];

const skillGroups = [
  {
    label: "Programming",
    skills: ["Python", "C", "JavaScript"],
  },
  {
    label: "Full-stack",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
    ],
  },
  {
    label: "Data & BI",
    skills: ["PostgreSQL", "SQLite", "Streamlit", "Data Analysis"],
  },
  {
    label: "Embedded",
    skills: ["8051", "C8051F340", "Microcontrollers"],
  },
  {
    label: "Automation",
    skills: ["PLC Programming", "Ladder Logic", "Control Systems"],
  },
  {
    label: "Applied AI",
    skills: ["Supervised ML", "Model Training", "Chatbots"],
  },
  {
    label: "Web & tools",
    skills: ["REST APIs", "Webhooks", "GitHub", "ERP Integration"],
  },
];

const certifications = [
  "AWS Elastic Beanstalk Fundamentals",
  "Cloud Computing Basics",
  "Infosys Springboard Certifications",
  "Be10x Certified AI Tools Expert",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anish Tote, home">
          <span className="brand-mark">AT</span>
          <span className="brand-copy">
            <strong>Anish Tote</strong>
            <small>Electronics Engineer</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#enterprise">Systems</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>

        <a className="header-cta" href="mailto:anishtote5@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true">
          <span className="trace trace-one" />
          <span className="trace trace-two" />
          <span className="trace trace-three" />
          <span className="pulse pulse-one" />
          <span className="pulse pulse-two" />
        </div>

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Available for internships &amp; engineering opportunities
          </div>
          <h1>
            I engineer systems
            <span> for the real world</span>
            <em>and the people in it.</em>
          </h1>
          <p className="hero-intro">
            Electronics engineer building enterprise applications, industrial
            automation, and data products that turn complex operations into
            clear, reliable workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#enterprise">
              View featured systems <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="/Anish-Tote-Resume.pdf"
              download
            >
              Download résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="system-card" aria-label="Engineering focus overview">
          <div className="system-card-head">
            <span>ENGINEERING PROFILE</span>
            <span className="system-live">OPEN TO WORK</span>
          </div>
          <div className="system-visual" aria-hidden="true">
            <span className="ring ring-one" />
            <span className="ring ring-two" />
            <span className="ring ring-three" />
            <span className="core">AT</span>
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
            <span className="orbit-node node-three" />
          </div>
          <div className="system-rows">
            <div>
              <span>01</span>
              <p>Enterprise applications</p>
              <b>BUILT</b>
            </div>
            <div>
              <span>02</span>
              <p>Industrial automation</p>
              <b>BUILT</b>
            </div>
            <div>
              <span>03</span>
              <p>Data &amp; analytics</p>
              <b>BUILT</b>
            </div>
          </div>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>07</strong>
            <span>Featured systems</span>
          </div>
          <div>
            <strong>~60%</strong>
            <span>Manual work reduced</span>
          </div>
          <div>
            <strong>02×</strong>
            <span>ERP deployment modes</span>
          </div>
          <div>
            <strong>Top 3</strong>
            <span>Diploma rank, 3 years</span>
          </div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Areas of expertise">
        <div className="signal-track">
          <span>Embedded systems</span>
          <i>◆</i>
          <span>Enterprise applications</span>
          <i>◆</i>
          <span>Data analytics</span>
          <i>◆</i>
          <span>Industrial automation</span>
          <i>◆</i>
          <span>Python development</span>
          <i>◆</i>
          <span>Digital design</span>
          <i>◆</i>
          <span>Applied AI</span>
          <i>◆</i>
          <span aria-hidden="true">Embedded systems</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Enterprise applications</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Data analytics</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Industrial automation</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Python development</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Digital design</span>
          <i aria-hidden="true">◆</i>
          <span aria-hidden="true">Applied AI</span>
          <i aria-hidden="true">◆</i>
        </div>
      </div>

      <section className="section profile-section" id="profile">
        <div className="section-label">
          <span>01</span>
          <p>Profile</p>
        </div>
        <div className="profile-copy reveal">
          <p className="lead">
            I turn messy operational problems into systems people can actually
            use, trust, and improve.
          </p>
          <div className="profile-columns">
            <p>
              My work now spans the full engineering stack: PLC automation,
              embedded and digital design, ERP-integrated applications,
              database architecture, and manufacturing analytics.
            </p>
            <p>
              I&apos;m especially interested in systems that improve
              reliability and reduce repetitive work—whether the right answer
              is ladder logic, a PostgreSQL-backed application, or a focused
              layer of analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="work">
        <div className="section-label">
          <span>02</span>
          <p>Field experience</p>
        </div>
        <div className="experience-wrap reveal">
          <div className="experience-heading">
            <div>
              <p className="overline">Student Intern</p>
              <h2>Logicon Technosolutions Pvt Ltd</h2>
            </div>
            <div className="experience-dates">
              <span>May - July 2023</span>
              <span>June - August 2024</span>
            </div>
          </div>
          <div className="experience-grid">
            <div className="experience-index">
              <span>PLC</span>
              <div className="ladder" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="experience-copy">
              <p>
                Worked directly with industrial automation systems and learned
                how control logic behaves beyond the classroom.
              </p>
              <ul>
                <li>
                  <span>01</span>
                  Developed and tested ladder logic programs
                </li>
                <li>
                  <span>02</span>
                  Supported control-system design and debugging
                </li>
                <li>
                  <span>03</span>
                  Built hands-on experience in real-time industrial environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section enterprise-section" id="enterprise">
        <div className="section-label">
          <span>03</span>
          <p>Enterprise systems</p>
        </div>
        <div className="enterprise-content">
          <div className="enterprise-heading reveal">
            <div>
              <p className="overline">Professional portfolio report</p>
              <h2>Applications built around real operational work.</h2>
            </div>
            <p>
              Full-stack delivery across ERP workflows, database architecture,
              responsive interfaces, and manufacturing intelligence.
            </p>
          </div>

          <div className="report-proof reveal" aria-label="Portfolio report summary">
            <span>REPORT / 2026</span>
            <strong>04 production-focused systems</strong>
            <p>ERP integration · approval workflows · data-led decisions</p>
          </div>

          <div className="enterprise-grid">
            {enterpriseProjects.map((project) => (
              <article
                className={`enterprise-card enterprise-${project.accent} reveal`}
                key={project.number}
              >
                <div className="enterprise-card-head">
                  <span>{project.number}</span>
                  <p>{project.eyebrow}</p>
                </div>
                <h3>{project.title}</h3>
                <p className="enterprise-summary">{project.summary}</p>
                <div className="enterprise-outcome">
                  <span>VALUE DELIVERED</span>
                  <strong>{project.outcome}</strong>
                </div>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="report-achievements reveal">
            <div>
              <span>01</span>
              <strong>Enterprise integration</strong>
              <p>Built within established ERP workflows.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Audit-ready systems</strong>
              <p>Designed for traceability and reliable review.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Full-stack ownership</strong>
              <p>From schema and API to responsive interface.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Parallel approvals</strong>
              <p>Multi-team review without sequential bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-label">
          <span>04</span>
          <p>Engineering build log</p>
        </div>
        <div className="projects-heading reveal">
          <h2>Projects built around useful outcomes.</h2>
          <p>
            Hardware, automation, and applied AI—each approached with the same
            focus on useful, understandable outcomes.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <p>{project.category}</p>
                <i aria-hidden="true">↗</i>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-impact">
                <span>OUTCOME</span>
                <strong>{project.impact}</strong>
              </div>
              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-label">
          <span>05</span>
          <p>Technical stack</p>
        </div>
        <div className="skills-layout">
          <div className="skills-copy reveal">
            <p className="overline">Capabilities</p>
            <h2>From physical signals to production software.</h2>
            <p>
              A cross-disciplinary toolkit shaped by industrial exposure,
              enterprise delivery, academic projects, and independent
              experimentation.
            </p>
          </div>
          <div className="skill-matrix reveal">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.label}>
                <span>0{index + 1}</span>
                <p>{group.label}</p>
                <div>
                  {group.skills.map((skill) => (
                    <b key={skill}>{skill}</b>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="section-label">
          <span>06</span>
          <p>Learning record</p>
        </div>
        <div className="learning-grid">
          <div className="education-card reveal">
            <p className="overline">Education</p>
            <div className="education-item">
              <div className="education-year">2024—27</div>
              <div>
                <h3>B.Tech, Electronics &amp; Communication</h3>
                <p>MIT World Peace University, Pune</p>
                <span>CGPA 7.5</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2021—24</div>
              <div>
                <h3>Diploma, Electronics &amp; Tele-Communication</h3>
                <p>Pimpri Chinchwad Polytechnic, Pune</p>
                <span>89.36%</span>
              </div>
            </div>
          </div>
          <div className="cert-card reveal">
            <p className="overline">Certifications</p>
            <ol>
              {certifications.map((certification, index) => (
                <li key={certification}>
                  <span>0{index + 1}</span>
                  {certification}
                </li>
              ))}
            </ol>
            <div className="language-line">
              <span>Languages</span>
              <p>English · Hindi · Marathi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <p className="overline">Open to opportunities</p>
        <h2>
          Have a system to improve?
          <span>Let&apos;s build it.</span>
        </h2>
        <a href="mailto:anishtote5@gmail.com" className="contact-email">
          anishtote5@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-meta">
          <a href="tel:+919604520679">+91 96045 20679</a>
          <p>Pune, Maharashtra, India</p>
          <p>Available for internships &amp; entry-level roles</p>
        </div>
      </section>

      <footer>
        <div>
          <span className="brand-mark">AT</span>
          <p>Engineering practical systems with curiosity and intent.</p>
        </div>
        <a href="#top">Back to top ↑</a>
        <span>© 2026 Anish Tote</span>
      </footer>
    </main>
  );
}
