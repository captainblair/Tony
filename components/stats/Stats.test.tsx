import React from 'react'

import { render, screen } from '@testing-library/react'

import { Stats } from './Stats'

beforeEach(() => {
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn()
    }))
})

afterEach(() => {
    jest.restoreAllMocks()
})

jest.mock('@/utils', () => ({
    useSiteData: () => ({
        projects: [{ title: 'P1' }, { title: 'P2' }, { title: 'P3' }, { title: 'P4' }]
    })
}))

describe('Stats', () => {
    it('renders all stat labels', () => {
        render(<Stats />)
        expect(screen.getByText('Years of experience')).toBeInTheDocument()
        expect(screen.getByText('Roles & companies')).toBeInTheDocument()
        expect(screen.getByText('Production projects')).toBeInTheDocument()
    })

    it('renders the stats section container', () => {
        render(<Stats />)
        expect(document.querySelector('section')).toBeInTheDocument()
    })
})
