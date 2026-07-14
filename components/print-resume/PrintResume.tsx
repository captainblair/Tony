import React from 'react'

import Image from 'next/image'

import tonyPic from '@/public/tony.jpeg'

import styles from './styles.module.sass'

const formatList = (items: string[]): string => items.join(' | ')

const CONTACT_LINKS = [
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
    { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'HTML/CSS'] },
    {
        group: 'Frameworks & Libraries',
        items: ['Django', 'Django REST Framework', 'React', 'Next.js', 'Flask', 'Laravel', 'Tailwind CSS', 'Streamlit']
    },
    { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
    {
        group: 'Tools & Deployment',
        items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Render', 'Vercel']
    },
    {
        group: 'Core Competencies',
        items: [
            'REST API Development',
            'Database Design',
            'Authentication & Authorization',
            'Role-Based Access Control',
            'Full Stack Development'
        ]
    }
]

const PROJECTS = [
    {
        title: 'SchoolSys | School Management & Operations Platform',
        stack: ['Python', 'Django', 'PostgreSQL', 'Render', 'Tailwind CSS'],
        impact:
            'Built a full-stack school management platform for handling administrative workflows including student records, attendance tracking, fee management, and library operations. Designed Django-based backend systems with role-based access control for different user groups and developed responsive dashboards using Tailwind CSS. Deployed the application using cloud hosting services.',
        link: 'https://schoolsys-00mj.onrender.com/',
        repo: 'https://github.com/captainblair/schoolsys1'
    },
    {
        title: 'Ustawi | Smart Rental & Property Platform',
        stack: ['Python', 'Django REST Framework', 'Next.js', 'PostgreSQL', 'Vercel', 'Neon'],
        impact:
            'Developed a full-stack rental platform connecting tenants and property managers. Built backend APIs using Django REST Framework and designed database models for managing users, properties, and rental-related data. Implemented authentication, frontend interfaces, and cloud deployment using modern web technologies.',
        link: 'https://ustawi-1.vercel.app/',
        repo: 'https://github.com/captainblair/USTAWI1'
    }
]

const EXPERIENCE = [
    {
        role: 'ICT Lead (Volunteer)',
        org: 'ODM Comrades Chapter',
        period: 'January 2026 | Present | Nairobi, Kenya',
        duties: [
            'Led frontend development for a university digital registration platform built using PHP and Laravel. Designed responsive interfaces, registration workflows, and dashboard components used for managing student records across multiple campuses. Collaborated with other contributors to improve data collection processes and streamline digital registration operations, supporting registration of over 800 students.'
        ]
    },
    {
        role: 'Freelance Developer',
        org: 'Remote',
        period: 'January 2024 | Present',
        duties: [
            'Built and deployed full-stack web applications using Python, Django, Flask, Streamlit, and MySQL. Developed backend APIs, authentication systems, database structures, and responsive user interfaces for different client and personal projects. Worked across the software development lifecycle including planning, development, testing, deployment, and maintenance.'
        ]
    },
    {
        role: 'Volunteer Computer Skills Trainer',
        org: 'LEA Organization',
        period: 'January 2025 | June 2026 | Nairobi, Kenya',
        duties: [
            'Trained over 50 community members in digital literacy, Git/GitHub, programming fundamentals, and web development concepts. Conducted practical sessions covering computer skills, development workflows, and basic software engineering practices.'
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
        period: 'Completed'
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
                <p className={styles.titleRole}>{'Junior Full Stack Developer'}</p>
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
                'Junior Full Stack Developer specializing in backend development with Python, Django, REST APIs, PostgreSQL, and modern JavaScript frameworks. Experienced in building and deploying practical web applications including management systems, marketplaces, and digital platforms. Skilled in database design, authentication systems, role-based access control, and cloud deployment workflows. Passionate about creating reliable software solutions that solve real-world problems.'
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
