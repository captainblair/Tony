import React from 'react'

import { NextSeo } from 'next-seo'

import {
    About,
    Contact,
    Experience,
    GithubLanguages,
    GithubRepos,
    Introduce,
    Projects,
    Skills,
    Stats
} from '@/components'
import { GithubDataProvider, useSiteData } from '@/utils'
import { fetchGithubData, type GithubData } from '@/utils/github-fetch'

import styles from './styles/index.module.sass'

const MainPage: React.FC<{ githubData: GithubData }> = ({ githubData }) => {
    const data = useSiteData()

    return (
        <GithubDataProvider data={githubData}>
            <NextSeo
                title={data?.seo?.index?.title}
                description={data?.seo?.index?.description}
                openGraph={{
                    images: [
                        {
                            height: 1333,
                            url: 'https://tony.vercel.app/tony.jpeg',
                            width: 1000
                        }
                    ],
                    locale: 'en-US',
                    siteName: 'Tony Wangolo'
                }}
            />

            {/* ── Hero / About me ─────────────────────────────────────── */}
            <div id={'intro'}>
                <Introduce />
                <Stats />
                <About />
            </div>

            {/* ── GitHub ──────────────────────────────────────────────── */}
            <div
                id={'activity'}
                className={styles.sectionBlock}
                aria-label={'GitHub'}
            >
                <GithubLanguages />
                <GithubRepos />
            </div>

            {/* ── Projects ────────────────────────────────────────────── */}
            <div
                id={'projects'}
                className={styles.sectionBlock}
                aria-label={'Projects'}
            >
                <section>
                    <h2 className={'pageTitle'}>{data?.seo?.projects?.title}</h2>
                    <p>{data?.seo?.projects?.description}</p>
                </section>

                <Projects />
            </div>

            {/* ── Experience ──────────────────────────────────────────── */}
            <div
                id={'experience'}
                className={styles.sectionBlock}
                aria-label={'Experience'}
            >
                <section className={styles.sectionHeader}>
                    <div>
                        <h2 className={'pageTitle'}>{data?.seo?.experience?.title}</h2>
                        <p>{data?.seo?.experience?.description}</p>
                    </div>
                </section>

                <Experience />
            </div>

            {/* ── Skills ──────────────────────────────────────────────── */}
            <div
                id={'skills'}
                className={styles.sectionBlock}
            >
                <section>
                    <h2 className={'pageTitle'}>{data?.seo?.skills?.title}</h2>
                    <p>{data?.seo?.skills?.skillsIntro}</p>
                </section>

                <Skills />
            </div>

            {/* ── Contact ─────────────────────────────────────────────── */}
            <div
                id={'contact'}
                className={styles.sectionBlock}
            >
                <Contact />
            </div>
        </GithubDataProvider>
    )
}

export async function getStaticProps() {
    const githubData = await fetchGithubData()

    return {
        props: {
            githubData
        }
    }
}

export default MainPage
