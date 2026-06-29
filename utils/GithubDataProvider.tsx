import React, { createContext, useContext } from 'react'

import { type GithubData } from './github-fetch'

const GithubDataContext = createContext<GithubData | null>(null)

export const GithubDataProvider: React.FC<{ children: React.ReactNode; data: GithubData }> = ({
    children,
    data
}) => {
    return <GithubDataContext.Provider value={data}>{children}</GithubDataContext.Provider>
}

export const useGithubData = (): GithubData | null => useContext(GithubDataContext)
