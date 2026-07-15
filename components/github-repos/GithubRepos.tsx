import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.sass'

const FEATURED_REPOS = [
    {
        description:
            'Full-Stack Django/PostgreSQL School ERP — role-based dashboards, attendance, fees, and library management.',
        language: 'Python',
        name: 'schoolsys1',
        url: 'https://github.com/captainblair/schoolsys1'
    },
    {
        description:
            'Next.js/Django Smart Rental Platform — two-sided marketplace with serverless PostgreSQL on Neon.',
        language: 'TypeScript',
        name: 'USTAWI1',
        url: 'https://github.com/captainblair/USTAWI1'
    },
    {
        description:
            'Django enterprise consulting platform — editorial publishing, recruitment pipelines, and role-based access control.',
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
