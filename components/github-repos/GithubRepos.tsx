import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.sass'

const FEATURED_REPOS = [
    {
        description:
            'Full-stack rental platform connecting tenants and property managers. Built with Django, Next.js, and PostgreSQL, featuring authentication, property listings, user workflows, and backend APIs.',
        language: 'TypeScript',
        name: 'USTAWI1',
        url: 'https://github.com/captainblair/USTAWI1'
    },
    {
        description:
            'Django/PostgreSQL school management platform with dashboards for different user roles including students, teachers, and administrators. Includes attendance tracking, fee management, and library operations.',
        language: 'Python',
        name: 'schoolsys1',
        url: 'https://github.com/captainblair/schoolsys1'
    },
    {
        description:
            'Built a Django-based consulting platform supporting content management, user roles, and business workflows for a professional services organization.',
        language: 'Python',
        name: 'Traviona1',
        url: 'https://github.com/captainblair/Traviona1'
    }
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } }
}

export const GithubRepos: React.FC = () => {
    return (
        <section className={styles.reposSection}>
            <h2 className={'pageTitle'}>{'Featured Repositories'}</h2>

            <motion.ul
                className={styles.reposGrid}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {FEATURED_REPOS.map((repo) => (
                    <motion.li
                        key={repo.name}
                        variants={cardVariants}
                    >
                        <a
                            href={repo.url}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className={styles.repoCard}
                        >
                            <div className={styles.repoHeader}>
                                <span className={styles.repoName}>{repo.name}</span>
                                {repo.language && <span className={styles.repoLang}>{repo.language}</span>}
                            </div>

                            {repo.description && <p className={styles.repoDesc}>{repo.description}</p>}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}
