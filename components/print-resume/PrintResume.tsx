import React from 'react'

import styles from './styles.module.sass'

const PORTFOLIO_URL = 'https://tony-three.vercel.app'
const CONTACT_LINKS = [
    { href: PORTFOLIO_URL, label: 'Portfolio' },
    { href: 'https://github.com/captainblair', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/tony-wangolo-545b23285/', label: 'LinkedIn' }
]
const ACHIEVEMENTS = [
    {
        title: '40% Data Workflow Improvement',
        description: 'Improved operational data extraction processes, increasing efficiency by 40%.'
    },
    {
        title: '800+ Records Supported',
        description:
            'Developed and deployed a registration platform supporting 800+ student records with zero reported downtime.'
    },
    {
        title: '50+ People Trained',
        description: 'Trained 50+ community members in Git, programming fundamentals, and digital literacy.'
    },
    {
        title: '30% Predictive Analytics Improvement',
        description:
            'Integrated machine learning models into analytics workflows, improving predictive capabilities by 30%.'
    }
]
const SKILLS = [
    { group: 'Languages', items: 'Python, TypeScript, JavaScript, PHP, SQL, HTML5, CSS3, Sass' },
    { group: 'Backend', items: 'Django, Flask, Laravel, REST APIs, Authentication, Role-Based Access Control' },
    { group: 'Frontend', items: 'React, Next.js, Tailwind CSS, Redux' },
    { group: 'Databases', items: 'PostgreSQL, MySQL, SQL Server, Supabase' },
    { group: 'DevOps & Deployment', items: 'Docker, Linux, Git, GitHub Actions, Jenkins, Render, Vercel' },
    {
        group: 'Engineering',
        items: 'API Design, Database Design, System Architecture, Data Analysis, Machine Learning Integration'
    }
]
const EXPERIENCE = [
    {
        role: 'ICT Lead',
        org: 'ODM Comrades Chapter',
        period: 'Jan 2026 – Present | Nairobi, Kenya',
        duties: [
            'Led frontend development of a university registration and management platform using PHP and Laravel, supporting 800+ student records.',
            'Develop responsive, role-aware interfaces, dashboard components, client-side validation, and data capture workflows across multi-campus environments.',
            'Integrated Laravel REST APIs to support high-volume registration workflows and reliable communication between frontend and backend systems.',
            'Improved operational data extraction efficiency by 40% through optimized data capture and processing workflows.',
            'Implemented maintainable frontend architecture supporting concurrent registration activity and secure handling of student data.'
        ]
    },
    {
        role: 'Freelance Full Stack Developer',
        org: 'Remote',
        period: 'Jan 2024 – Present',
        duties: [
            'Build and deploy full-stack web applications using Python, Django, Flask, Streamlit, JavaScript/TypeScript, and MySQL.',
            'Design backend services, REST APIs, authentication workflows, relational database models, and reusable application components.',
            'Develop responsive interfaces and data-driven dashboards for operational and analytical use cases.',
            'Integrate machine learning models into web applications to support forecasting and predictive analytics.',
            'Optimize database queries and application workflows to improve performance, maintainability, and scalability.',
            'Deploy production applications using cloud platforms and modern version-control workflows.'
        ]
    }
]
const PROJECTS = [
    {
        title: 'Ustawi – Smart Rental & Property Platform',
        stack: 'Django | Next.js | PostgreSQL',
        duties: [
            'Built and deployed a full-stack rental marketplace connecting tenants with property managers.',
            'Developed backend functionality using Django with PostgreSQL for relational data management.',
            'Built the frontend using Next.js with responsive interfaces for property discovery and management workflows.',
            'Optimized database queries and connection handling to improve application performance.'
        ],
        links: [
            { href: 'https://ustawi-1.vercel.app/', label: 'Live Demo' },
            { href: 'https://github.com/captainblair/USTAWI1', label: 'GitHub' }
        ]
    },
    {
        title: 'ODM Comrades Chapter (OCC) – Digital Registration & Management Platform',
        stack: 'PHP | Laravel | REST API',
        duties: [
            'Co-engineered a digital registration and management platform supporting 800+ student records.',
            'Developed responsive interfaces, validation workflows, and data capture functionality.',
            'Integrated Laravel REST endpoints to support reliable registration and data-management workflows.',
            'Improved operational data extraction efficiency by 40% through optimized data workflows.'
        ]
    },
    {
        title: 'SchoolSys – School Management & Operations Platform',
        stack: 'Django | PostgreSQL',
        duties: [
            'Built an end-to-end school management platform for student administration and operational workflows.',
            'Designed a unified relational data model for student profiles, attendance, fees, and library records.',
            'Implemented role-based dashboards and access controls for different user workflows.',
            'Developed backend functionality with Django and PostgreSQL and integrated frontend interfaces for administrative operations.'
        ],
        links: [{ href: 'https://github.com/captainblair/schoolsys1', label: 'GitHub' }]
    }
]

const ResumeLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        href={href}
        className={styles.resumeLink}
        rel={'noopener noreferrer'}
        target={'_blank'}
    >
        {children}
    </a>
)
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className={styles.resumeSection}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
    </section>
)

export const PrintResume: React.FC = () => (
    <div
        id={'print-resume'}
        className={styles.printResume}
        aria-hidden={'true'}
    >
        <header className={styles.header}>
            <div className={styles.identity}>
                <h1 className={styles.name}>{'Tony Wangolo Inganga'}</h1>
                <p className={styles.titleRole}>{'Software Engineer | Backend & Full Stack Development'}</p>
                <p className={styles.location}>
                    {'Nairobi, Kenya | +254 111 414 441 | '}
                    <ResumeLink href={'mailto:wangolotony4@gmail.com'}>{'wangolotony4@gmail.com'}</ResumeLink>
                </p>
                <p className={styles.contactList}>
                    {CONTACT_LINKS.map((item, index) => (
                        <React.Fragment key={item.href}>
                            {index > 0 && ' | '}
                            <ResumeLink href={item.href}>{item.label}</ResumeLink>
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </header>
        <main>
            <Section title={'Professional Summary'}>
                <p className={styles.summary}>
                    {
                        'Software Engineer specializing in backend and full-stack web development with Python, Django, Flask, TypeScript, PHP, and Laravel. Experienced in designing REST APIs, relational databases, role-based access control, authentication workflows, responsive interfaces, and production deployments. Built and deployed systems supporting 800+ records, optimized data workflows by 40%, and integrated machine learning capabilities into web applications.'
                    }
                </p>
            </Section>
            <Section title={'Key Achievements'}>
                <div className={styles.achievementGrid}>
                    {ACHIEVEMENTS.map((item) => (
                        <article
                            key={item.title}
                            className={styles.achievement}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Section>
            <Section title={'Professional Experience'}>
                {EXPERIENCE.map((item) => (
                    <article
                        key={item.role}
                        className={styles.role}
                    >
                        <p className={styles.period}>{item.period}</p>
                        <h3 className={styles.roleTitle}>
                            {item.role}
                            {' | '}
                            <span className={styles.roleOrg}>{item.org}</span>
                        </h3>
                        <ul className={styles.dutyList}>
                            {item.duties.map((duty) => (
                                <li key={duty}>{duty}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </Section>
            <Section title={'Education'}>
                <article className={styles.role}>
                    <p className={styles.period}>{'Expected 2027'}</p>
                    <h3 className={styles.roleTitle}>
                        {'Bachelor of Technology in Communications and Computer Networks'}
                    </h3>
                    <p>{'Technical University of Kenya'}</p>
                </article>
            </Section>
            <Section title={'Technical Skills'}>
                {SKILLS.map((group) => (
                    <div
                        key={group.group}
                        className={styles.skillGroup}
                    >
                        <h3 className={styles.skillGroupTitle}>
                            {group.group}
                            {':'}
                        </h3>
                        <p className={styles.skillTags}>{group.items}</p>
                    </div>
                ))}
            </Section>
            <Section title={'Projects'}>
                {PROJECTS.map((project) => (
                    <article
                        key={project.title}
                        className={styles.role}
                    >
                        <h3 className={styles.roleTitle}>{project.title}</h3>
                        <p className={styles.projectStack}>{project.stack}</p>
                        {project.links && (
                            <p className={styles.projectLink}>
                                {project.links.map((link, index) => (
                                    <React.Fragment key={link.href}>
                                        {index > 0 && ' | '}
                                        <ResumeLink href={link.href}>{link.label}</ResumeLink>
                                    </React.Fragment>
                                ))}
                            </p>
                        )}
                        <ul className={styles.dutyList}>
                            {project.duties.map((duty) => (
                                <li key={duty}>{duty}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </Section>
            <Section title={'Certifications'}>
                <article className={styles.role}>
                    <h3 className={styles.roleTitle}>{'Professional Backend Web Development Certification'}</h3>
                    <p>{'ALX Africa, 2025'}</p>
                </article>
                <article className={styles.role}>
                    <h3 className={styles.roleTitle}>{'Artificial Intelligence (AI)'}</h3>
                    <p>{'ALX Africa, 2025'}</p>
                </article>
            </Section>
            <Section title={'Volunteer Experience'}>
                <article className={styles.role}>
                    <p className={styles.period}>{'Jan 2025 – Jun 2026 | Nairobi, Kenya'}</p>
                    <h3 className={styles.roleTitle}>
                        {'Volunteer Computer Skills Trainer | '}
                        <span className={styles.roleOrg}>{'LEA Organization'}</span>
                    </h3>
                    <ul className={styles.dutyList}>
                        <li>
                            {
                                'Trained 50+ community members in digital literacy, Git/GitHub, programming fundamentals, and basic software development workflows.'
                            }
                        </li>
                        <li>
                            {
                                'Facilitated practical workshops covering local development environments, web development fundamentals, version control, and clean coding practices.'
                            }
                        </li>
                        <li>
                            {'Guided junior learners through hands-on programming exercises and development workflows.'}
                        </li>
                    </ul>
                </article>
            </Section>
        </main>
    </div>
)
