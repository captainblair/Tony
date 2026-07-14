import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Icon, IconTypes } from '@/components'
import tonyPic from '@/public/tony.jpeg'
import { update } from '@/update'
import { useSiteData } from '@/utils'

import styles from './styles.module.sass'

export const Introduce: React.FC = () => {
    const data = useSiteData()

    const dateUpdate = new Date(update).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric'
    })

    return (
        <section className={styles.introduceSection}>
            {/* tony with animated glow ring */}
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
                        alt={"Hi, I'm Tony - Picture of the author"}
                        priority
                    />
                </div>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>
                            {"Hi, I'm "}
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
                        <span className={styles.pillValue}>{'Hands-on'}</span>
                        <span className={styles.pillLabel}>{'Development Experience'}</span>
                    </div>
                </div>

                <ul className={styles.factsList}>
                    {[
                        { title: 'Location', value: data?.biography?.location },
                        { title: 'Timezone', value: data?.biography?.timezone },
                        { title: 'Updated', value: dateUpdate }
                    ].map(({ title, value }) => (
                        <li key={`fact-${title}`}>
                            <div className={styles.key}>{title}</div>
                            <div className={styles.value}>{value}</div>
                        </li>
                    ))}
                </ul>

                <div className={styles.description}>
                    <p>
                        {'Full Stack Developer focused on backend engineering with'} <b>{'Python'}</b>{', '}
                        <b>{'Django'}</b>{', REST APIs, '}
                        <b>{'PostgreSQL'}</b>
                        {', and modern JavaScript frameworks. I build practical web applications with authentication, database-driven workflows, and responsive user interfaces.'}
                    </p>
                    <p>
                        {
                            'I have built management systems, rental platforms, and digital registration solutions while gaining hands-on experience in backend development, database design, deployment, and software delivery.'
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
                        onClick={(event) => {
                            event.preventDefault()
                            window.print()
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
