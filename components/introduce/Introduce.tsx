import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Icon, IconTypes } from '@/components'
import tonyPic from '@/public/tony.jpeg'
import { useSiteData } from '@/utils'

import styles from './styles.module.sass'

const printCv = () => {
    const previousTitle = document.title
    // Empty title so browser print headers/footers do not show the site name on every page
    document.title = ' '

    const restoreTitle = () => {
        document.title = previousTitle
        window.removeEventListener('afterprint', restoreTitle)
    }

    window.addEventListener('afterprint', restoreTitle)
    window.print()
}

export const Introduce: React.FC = () => {
    const data = useSiteData()

    return (
        <section className={styles.introduceSection}>
            <div className={styles.tonyWrapper}>
                <div
                    className={styles.tonyGlow}
                    aria-hidden={'true'}
                />
                <div className={styles.tonyContainer}>
                    <Image
                        src={tonyPic}
                        fill
                        sizes={'(max-width: 768px) 240px, 45vw'}
                        style={{ objectFit: 'cover' }}
                        alt={"Hi I'm Tony - Picture of the author"}
                        priority
                    />
                </div>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>
                            {"Hi I'm "}
                            {/* eslint-disable-next-line react/jsx-max-depth */}
                            <span>{data?.biography?.name}</span>
                        </h1>

                        <div className={styles.links}>
                            {data?.contactLinks?.map((item) => (
                                <Link
                                    key={`link-${String(item.link)}`}
                                    href={item.link}
                                    title={item.label}
                                    aria-label={item.label}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                    className={styles.link}
                                >
                                    <Icon name={item.icon as IconTypes} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <h3 className={styles.subTitle}>{data?.biography?.title}</h3>
                    {data?.biography?.availableForWork && (
                        <div
                            className={styles.openToWork}
                            title={'Open to new opportunities'}
                        >
                            <span
                                className={styles.openToWorkDot}
                                aria-hidden={'true'}
                            />
                            {'Open to opportunities'}
                        </div>
                    )}
                </div>

                <div className={styles.counterPills}>
                    <div className={styles.pill}>
                        <span className={styles.pillValue}>{'1.5+ Years'}</span>
                        <span className={styles.pillLabel}>{'Experience'}</span>
                    </div>
                </div>

                <ul className={styles.factsList}>
                    {[
                        { title: 'Location', value: data?.biography?.location },
                        { title: 'Timezone', value: data?.biography?.timezone }
                    ].map(({ title, value }) => (
                        <li key={`fact-${title}`}>
                            <div className={styles.key}>{title}</div>
                            <div className={styles.value}>{value}</div>
                        </li>
                    ))}
                </ul>

                <div className={styles.description}>
                    <p>
                        {'Full Stack Software Engineer specializing in scalable backend architecture, relational database design, and end-to-end web deployment. I build production-ready systems with'}{' '}
                        <b>{'Python (Django/Flask)'}</b>
                        {' and '}
                        <b>{'JavaScript/TypeScript'}</b>
                        {', with a focus on RBAC, API design, and cloud-native delivery.'}
                    </p>
                    <p>
                        {
                            'Shipped enterprise platforms including school administration systems, rental marketplaces, and university registration hubs — architecting secure data pipelines, optimized schemas, and role-based dashboards for real-world scale.'
                        }
                    </p>
                </div>

                <div className={styles.ctaGroup}>
                    <a
                        href={'#projects'}
                        className={styles.ctaPrimary}
                    >
                        {'View My Work'}
                    </a>
                    <a
                        href={'/'}
                        className={styles.ctaSecondary}
                        title={"Opens print dialog — choose Save as PDF and turn Headers and footers OFF to hide dates"}
                        onClick={(event) => {
                            event.preventDefault()
                            printCv()
                        }}
                    >
                        {'Download CV'}
                    </a>
                    <a
                        href={'#contact'}
                        className={styles.ctaTertiary}
                    >
                        {'Contact Me'}
                    </a>
                </div>
            </div>
        </section>
    )
}
