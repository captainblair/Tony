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

describe('Stats', () => {
    it('renders all stat labels', () => {
        render(<Stats />)
        expect(screen.getByText('Projects Built')).toBeInTheDocument()
        expect(screen.getByText('Platforms Developed')).toBeInTheDocument()
        expect(screen.getByText('Years Learning & Building')).toBeInTheDocument()
    })

    it('renders the stats section container', () => {
        render(<Stats />)
        expect(document.querySelector('section')).toBeInTheDocument()
    })
})
