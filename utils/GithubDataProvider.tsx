import React, { createContext, useContext, useEffect, useState } from 'react'

import { fetchGithubData, type GithubData } from './github-fetch'

const GithubDataContext = createContext<GithubData | null>(null)

export const GithubDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<GithubData | null>(null)

    useEffect(() => {
        fetchGithubData()
            .then(setData)
            .catch(() => {})
    }, [])

    return <GithubDataContext.Provider value={data}>{children}</GithubDataContext.Provider>
}

export const useGithubData = (): GithubData | null => useContext(GithubDataContext)
