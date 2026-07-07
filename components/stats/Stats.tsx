import React, { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

import { useSiteData } from '@/utils'

import styles from './styles.module.sass'

type StatItemProps = {
    value: number
    suffix?: string
    label: string
    delay?: number
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = '', label, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.floor(v))

    useEffect(() => {
        if (!inView) {
            return
        }
        const controls = animate(count, value, { delay, duration: 1.5, ease: 'easeOut' })

        return controls.stop
    }, [inView, value, delay, count])

    return (
        <div
            ref={ref}
            className={styles.statItem}
        >
            <div className={styles.statNumber}>
                <motion.span>{rounded}</motion.span>
                {suffix && <span className={styles.suffix}>{suffix}</span>}
            </div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    )
}

export const Stats: React.FC = () => {
    const data = useSiteData()

    const statItems = [
        { delay: 0, label: 'Years of experience', suffix: '.5+', value: 1 },
        { delay: 0.15, label: 'Roles & companies', value: 1 },
        { delay: 0.3, label: 'Production projects', value: data?.projects?.length ?? 5 }
    ]

    return (
        <section className={styles.statsSection}>
            {statItems.map((stat) => (
                <StatItem
                    key={stat.label}
                    delay={stat.delay}
                    label={stat.label}
                    suffix={stat.suffix}
                    value={stat.value}
                />
            ))}
        </section>
    )
}
