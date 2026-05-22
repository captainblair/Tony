import React from 'react'

import Image from 'next/image'

import tonyPic from '@/public/tony.jpeg'

import styles from './styles.module.sass'

const SKILLS = [
    { group: 'Languages', items: ['Python', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
    {
        group: 'Frameworks',
        items: ['Django', 'Flask', 'Laravel', 'React', 'Redux', 'SASS', 'TailwindCSS', 'Streamlit']
    },
    { group: 'Databases', items: ['MySQL', 'SQL Server'] },
    { group: 'Infrastructure', items: ['Docker', 'Git', 'Jenkins', 'Linux', 'GitHub Actions'] },
    { group: 'Tools & DevOps', items: ['RESTful APIs', 'XAMPP', 'venv / pip', 'PythonAnywhere'] },
    {
        group: 'Core Competencies',
        items: ['System Architecture', 'RBAC', 'Data Analysis', 'Technical Training', 'Leadership']
    }
]

const EXPERIENCE = [
    {
        role: 'ICT Lead',
        org: 'ODM Comrades Chapter',
        period: 'January 2026 – Present',
        duties: 'Spearheaded the engineering and development of a centralized digital system used by the chapter to support student registration across multiple universities. Managed large-scale user data to improve operational efficiency and streamline organizational workflows.'
    },
    {
        role: 'Freelance Full Stack Developer',
        org: 'Remote',
        period: '2024 – Present',
        duties: 'Developed and deployed full-stack web applications using Python, Flask/Django, Streamlit, and MySQL, focusing on authentication systems, database design, and scalable backend architecture. Built and integrated user-centric platforms supporting data management, registration systems, and service-based matching systems. Contributed to systems involving data analysis and machine learning integration for real-world applications including prediction models and decision-support tools.'
    },
    {
        role: 'Volunteer Computer Skills Trainer',
        org: 'LEA Organization',
        period: '2024 – Present',
        duties: 'Empowered community members by teaching digital literacy, foundational programming concepts, and version control using Git and GitHub. Facilitated technical workshops to build proficiency in modern office tools and web development fundamentals.'
    }
]

const EDUCATION = [
    {
        degree: 'Bachelor of Technology: Communications and Computer Networks',
        institution: 'Technical University of Kenya',
        period: 'Expected Graduation: 2027'
    },
    {
        degree: 'Professional Backend Web Development',
        institution: 'ALX Africa',
        period: 'Graduated'
    },
    {
        degree: 'Backend Web Development',
        institution: 'ALX Africa',
        period: 'Graduated'
    }
]

export const PrintResume: React.FC = () => (
    <div
        id={'print-resume'}
        className={styles.printResume}
        aria-hidden={'true'}
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
                <p className={styles.titleRole}>{'Software Engineer'}</p>
                <p className={styles.location}>{'Nairobi, Kenya | +254 111 414 441 | wangolotony4@gmail.com'}</p>
                <ul className={styles.contactList}>
                    <li>
                        <span className={styles.contactLabel}>{'GitHub:'}</span>{' '}
                        <span className={styles.contactValue}>{'github.com/captainblair'}</span>
                    </li>
                    <li>
                        <span className={styles.contactLabel}>{'LinkedIn:'}</span>{' '}
                        <span className={styles.contactValue}>{'linkedin.com/in/tony-wangolo-545b23285'}</span>
                    </li>
                    <li>
                        <span className={styles.contactLabel}>{'X:'}</span>{' '}
                        <span className={styles.contactValue}>{'x.com/Tony_Blair01'}</span>
                    </li>
                </ul>
            </div>
        </div>

        <p className={styles.summary}>
            {
                'Highly motivated Full Stack Software Engineer with a strong foundation in backend development and system architecture. Proven ability to design and deploy scalable web applications using Python, PHP, Django, and Flask. Experienced in building RESTful APIs, managing MySQL databases, and collaborating in Agile environments to deliver secure, efficient, and user-focused software solutions.'
            }
        </p>

        <div className={styles.body}>
            <div className={styles.experience}>
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
                        <p className={styles.duties}>{item.duties}</p>
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
                        <p className={styles.skillTags}>{group.items.join(' · ')}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
