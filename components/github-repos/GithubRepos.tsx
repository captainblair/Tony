import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.sass'

const StarIcon = () => (
    <svg
        viewBox={'0 0 24 24'}
        fill={'currentColor'}
        aria-hidden={'true'}
    >
        <path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'} />
    </svg>
)

const ForkIcon = () => (
    <svg
        viewBox={'0 0 24 24'}
        fill={'currentColor'}
        aria-hidden={'true'}
    >
        <path
            d={
                'M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4-14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 7v1.5a4 4 0 0 0 3 3.87V17a4 4 0 0 0 2 0v-4.63A4 4 0 0 0 16 8.5V7'
            }
        />
    </svg>
)

const FEATURED_REPOS = [
    {
        description:
            'Full-stack rental platform connecting tenants and property managers. Built with Django, Next.js, and PostgreSQL.',
        forks: 0,
        language: 'TypeScript',
        name: 'USTAWI1',
        stars: 0,
        url: 'https://github.com/captainblair/USTAWI1'
    },
    {
        description:
            'Django/PostgreSQL school management platform with dashboards for students, teachers, and administrators. Includes attendance, fee tracking, and library management features.',
        forks: 0,
        language: 'Python',
        name: 'schoolsys1',
        stars: 0,
        url: 'https://github.com/captainblair/schoolsys1'
    },
    {
        description: 'Django-based consulting platform with content management features, user roles, and business workflows.',
        forks: 0,
        language: 'Python',
        name: 'Traviona1',
        stars: 0,
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

                            <div className={styles.repoMeta}>
                                <span className={styles.metaStat}>
                                    <StarIcon />
                                    {repo.stars}
                                </span>
                                <span className={styles.metaStat}>
                                    <ForkIcon />
                                    {repo.forks}
                                </span>
                            </div>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}
