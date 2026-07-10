import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import { PageTransition } from '@/components/page-transition'
import { childVariants, parentVariants } from '@/components/page-transition/constants'
import { useSiteData } from '@/utils'

import styles from './styles.module.sass'
import { ProjectType } from './types'

export const Projects: React.FC = () => {
    const data = useSiteData()

    return (
        <section className={styles.projectsContainer}>
            <PageTransition
                parentVariants={parentVariants.slide}
                childVariants={childVariants.slide}
            >
                {(data?.projects as ProjectType[] | undefined)?.map((item) => {
                    const imageWidth = item.imageWidth ?? 176
                    const imageHeight = item.imageHeight ?? 176
                    const imageFit: 'cover' | 'contain' = item.imageFit === 'contain' ? 'contain' : 'cover'
                    const imagePosition = item.imagePosition ?? 'center'
                    const isLandscape = imageWidth > imageHeight

                    const projectImage = (
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={imageWidth}
                            height={imageHeight}
                            loading={'lazy'}
                            style={{
                                objectFit: imageFit,
                                objectPosition: imagePosition
                            }}
                        />
                    )

                    return (
                    <div
                        key={`project-${item?.link ?? item?.title}`}
                        className={styles.item}
                    >
                        <div
                            className={`${styles.imageWrapper}${isLandscape ? ` ${styles.imageWrapperLandscape}` : ''}`}
                            style={{ width: imageWidth, height: imageHeight }}
                        >
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    title={item.title}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                    tabIndex={-1}
                                    aria-hidden={'true'}
                                >
                                    {projectImage}
                                </Link>
                            ) : (
                                projectImage
                            )}
                            {item.link && (
                                <div
                                    className={styles.imageOverlay}
                                    aria-hidden={'true'}
                                >
                                    <span>{'View →'}</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.description}>
                            <div>
                                <h2>{item.title}</h2>
                                {item.migrationNotice && (
                                    <p className={styles.migrationBanner}>
                                        {
                                            '🔄 Infrastructure Migration Notice: Database currently migrating to a permanent serverless cluster. Code repository accessible below.'
                                        }
                                    </p>
                                )}
                                {item?.description && <p>{item.description}</p>}
                            </div>

                            <div className={styles.info}>
                                {item.github && (
                                    <div className={styles.infoItem}>
                                        <Icon name={iconNames.github} />
                                        <Link
                                            href={item.github}
                                            title={`${item.title} GitHub Source Code`}
                                            target={'_blank'}
                                            rel={'noopener noreferrer'}
                                        >
                                            {'GitHub Repository'}
                                        </Link>
                                    </div>
                                )}

                                {item.link && (
                                    <div className={styles.infoItem}>
                                        <Icon name={iconNames.web} />
                                        <Link
                                            href={item.link}
                                            title={`${item.title} Website Live`}
                                            target={'_blank'}
                                            rel={'noopener noreferrer'}
                                        >
                                            {item.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </PageTransition>
        </section>
    )
}
