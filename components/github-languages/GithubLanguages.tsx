import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.sass'

const PRIMARY_TECHNOLOGIES = ['Python', 'Django', 'JavaScript', 'React', 'PostgreSQL', 'Next.js']

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const } }
}

export const PrimaryTechnologies: React.FC = () => (
    <section className={styles.technologiesSection}>
        <h2 className={'pageTitle'}>{'Primary Technologies'}</h2>

        <motion.ul
            className={styles.techList}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
        >
            {PRIMARY_TECHNOLOGIES.map((tech) => (
                <motion.li
                    key={tech}
                    className={styles.techItem}
                    variants={itemVariants}
                >
                    {tech}
                </motion.li>
            ))}
        </motion.ul>
    </section>
)

export const GithubLanguages = PrimaryTechnologies
