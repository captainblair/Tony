import React from 'react'

import Image from 'next/image'

import tonyPic from '@/public/tony.jpeg'

import styles from './styles.module.sass'

const formatList = (items: string[]): string => items.join(' | ')

const CONTACT_LINKS = [
    { href: 'https://tony.vercel.app', label: 'Portfolio:' },
    { href: 'https://github.com/captainblair', label: 'GitHub:' },
    { href: 'https://www.linkedin.com/in/tony-wangolo-545b23285/', label: 'LinkedIn:' }
]

type ResumeLinkProps = {
    href: string
    children: React.ReactNode
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ href, children }) => {
    const isWebLink = href.startsWith('http')

    return (
        <a
            href={href}
            className={styles.resumeLink}
            {...(isWebLink
                ? {
                      rel: 'noopener noreferrer',
                      target: '_blank'
                  }
                : {})}
        >
            {children}
        </a>
    )
}

const SKILLS = [
    { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML5', 'CSS3', 'SASS'] },
    {
        group: 'Frameworks & Libraries',
        items: ['Django', 'Flask', 'Next.js', 'React', 'Laravel', 'TailwindCSS', 'Streamlit', 'Redux']
    },
    { group: 'Databases & Storage', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Supabase'] },
    {
        group: 'Infrastructure & DevOps',
        items: ['Docker', 'Linux', 'Git', 'GitHub Actions', 'Jenkins', 'Render', 'Vercel']
    },
    {
        group: 'Core Competencies',
        items: ['API Design', 'Role-Based Access Control (RBAC)', 'Data Analysis', 'System Architecture']
    }
]

const PROJECTS = [
    {
        title: 'SchoolSys | School Management & Operations Platform',
        stack: ['Python', 'Django', 'PostgreSQL', 'Render', 'TailwindCSS'],
        impact:
            'Built and shipped a production-ready, full-stack enterprise school administration platform. Architected granular role-based dashboards to manage multi-tiered user streams (students, teachers, administrators). Optimized database schemas for tracking profile approvals, attendance, financial fee records, and library loans into a unified platform.',
        link: 'https://schoolsys-00mj.onrender.com/',
        repo: 'https://github.com/captainblair/schoolsys1'
    },
    {
        title: 'Ustawi | The Smart Rental & Property Platform',
        stack: ['Python', 'Django', 'Next.js', 'PostgreSQL (Neon Serverless)', 'Vercel'],
        impact:
            'Developed a full-stack, two-sided rental marketplace matching tenants with property managers. Optimized database queries and implemented serverless PostgreSQL schema connections to scale performance metrics efficiently while respecting tight environment resource baselines.',
        link: 'https://ustawi-1.vercel.app/',
        repo: 'https://github.com/captainblair/USTAWI1'
    }
]

const EXPERIENCE = [
    {
        role: 'ICT Lead',
        org: 'ODM Comrades Chapter',
        period: 'January 2026 | Present | Nairobi, Kenya',
        duties: [
            'Led frontend engineering for a centralized university digital registration platform built with PHP and Laravel, delivering responsive, role-aware interfaces and multi-step registration workflows that supported secure onboarding of 800+ active student records with zero downtime.',
            'Engineered client-side validation layers, dashboard UI components, and data capture flows across multi-campus university directories, improving operational data extraction efficiency by 40%.',
            'Collaborated with backend engineers to integrate Laravel REST endpoints and structure high-volume concurrent submission interfaces with clean, maintainable frontend architecture.'
        ]
    },
    {
        role: 'Freelance Full Stack Developer',
        org: 'Remote',
        period: '2024 | Present',
        duties: [
            'Architected, tested, and deployed end-to-end full-stack web platforms using Python (Flask | Django), Streamlit, and MySQL, focusing heavily on secure authentication modules and robust backend query structures.',
            'Implemented machine learning and analytical models into custom dashboard interfaces, providing automated decision support tools and predictive analysis layers for localized business platforms.',
            'Authored clean, maintainable, and reusable codebase patterns, collaborating iteratively to integrate frontend responsive designs with complex relational data systems.'
        ]
    },
    {
        role: 'Volunteer Computer Skills Trainer',
        org: 'LEA Organization',
        period: 'January 2025 | June 2026 | Nairobi, Kenya',
        duties: [
            'Upskilled and trained over 50 community members in digital literacy, version control fundamentals utilizing Git | GitHub, and core programming paradigms.',
            'Orchestrated technical engineering workshops, guiding junior learners through local workflow environments, structural web basics, and clean programming code principles.'
        ]
    }
]

const EDUCATION = [
    {
        degree: 'Bachelor of Technology | Communications and Computer Networks',
        institution: 'Technical University of Kenya',
        period: 'Expected Graduation | 2027'
    },
    {
        degree: 'Professional Backend Web Development Certification',
        institution: 'ALX Africa',
        period: 'Graduated'
    }
]

export const PrintResume: React.FC = () => (
    <div
        id={'print-resume'}
        className={styles.printResume}
        aria-hidden={'true'}
        inert
    >
        <div className={styles.header}>
            <div className={styles.tony}>
                <Image
                    src={tonyPic}
                    alt={'Tony Wangolo Inganga'}
                    width={90}
                    height={90}
                />
            </div>
            <div className={styles.identity}>
                <h1 className={styles.name}>{'Tony Wangolo Inganga'}</h1>
                <p className={styles.titleRole}>{'Software Engineer | 1.5+ Years Experience'}</p>
                <p className={styles.location}>
                    {'Nairobi, Kenya | +254 111 414 441 | '}
                    <ResumeLink href={'mailto:wangolotony4@gmail.com'}>{'wangolotony4@gmail.com'}</ResumeLink>
                </p>
                <ul className={styles.contactList}>
                    {CONTACT_LINKS.map((item) => (
                        <li key={item.href}>
                            <span className={styles.contactLabel}>{item.label}</span>{' '}
                            <ResumeLink href={item.href}>{item.href}</ResumeLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <p className={styles.summary}>
            {
                'Highly motivated Full Stack Software Engineer specializing in scalable backend architecture, robust relational database design, and end-to-end web deployment ecosystems. Proven track record of developing production-ready systems using Python (Django | Flask) and JavaScript | TypeScript. Adept at creating optimized data structures, implementing secure Role-Based Access Control (RBAC), and maximizing software utility under cloud infrastructure resource constraints.'
            }
        </p>

        <div className={styles.body}>
            <div className={styles.experience}>
                <h2 className={styles.sectionTitle}>{'Core Production Projects'}</h2>
                {PROJECTS.map((project, i) => (
                    <div
                        key={`project-${i}`}
                        className={styles.role}
                    >
                        <h3 className={styles.roleTitle}>{project.title}</h3>
                        <p className={styles.projectStack}>
                            <span className={styles.contactLabel}>{'Technical Stack:'}</span> {formatList(project.stack)}
                        </p>
                        <p className={styles.duties}>{project.impact}</p>
                        <p className={styles.projectLink}>
                            <span className={styles.contactLabel}>{'Live Link:'}</span>{' '}
                            <ResumeLink href={project.link}>{project.link}</ResumeLink>
                        </p>
                        {'repo' in project && project.repo && (
                            <p className={styles.projectLink}>
                                <span className={styles.contactLabel}>{'Repository:'}</span>{' '}
                                <ResumeLink href={project.repo}>{project.repo}</ResumeLink>
                            </p>
                        )}
                    </div>
                ))}

                <h2 className={styles.sectionTitle}>{'Professional Experience'}</h2>
                {EXPERIENCE.map((item, i) => (
                    <div
                        key={i}
                        className={styles.role}
                    >
                        <div className={styles.roleMeta}>
                            <span className={styles.period}>{item.period}</span>
                        </div>
                        <h3 className={styles.roleTitle}>
                            {item.role}{' '}
                            <span className={styles.roleOrg}>
                                {'| '}
                                {item.org}
                            </span>
                        </h3>
                        <ul className={styles.dutyList}>
                            {item.duties.map((duty, j) => (
                                <li
                                    key={j}
                                    className={styles.duties}
                                >
                                    {duty}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h2 className={styles.sectionTitle}>{'Education'}</h2>
                {EDUCATION.map((item, i) => (
                    <div
                        key={i}
                        className={styles.role}
                    >
                        <div className={styles.roleMeta}>
                            <span className={styles.period}>{item.period}</span>
                        </div>
                        <h3 className={styles.roleTitle}>{item.degree}</h3>
                        <p className={styles.duties}>{item.institution}</p>
                    </div>
                ))}
            </div>

            <div className={styles.skills}>
                <h2 className={styles.sectionTitle}>{'Technical Skills'}</h2>
                {SKILLS.map((group, i) => (
                    <div
                        key={i}
                        className={styles.skillGroup}
                    >
                        <h3 className={styles.skillGroupTitle}>{group.group}</h3>
                        <p className={styles.skillTags}>{formatList(group.items)}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
