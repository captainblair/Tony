import React from 'react'

import { render, screen } from '@testing-library/react'

import { GithubRepos } from './GithubRepos'

jest.mock('framer-motion', () => {
    const FRAMER_PROPS = new Set(['initial', 'animate', 'exit', 'variants', 'whileInView', 'viewport', 'transition'])
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const React = require('react')

    return {
        motion: {
            li: ({ children, ...rest }: React.HTMLAttributes<HTMLLIElement>) => {
                const domProps = Object.fromEntries(Object.entries(rest).filter(([k]) => !FRAMER_PROPS.has(k)))
                return React.createElement('li', domProps, children)
            },
            ul: ({ children, ...rest }: React.HTMLAttributes<HTMLUListElement>) => {
                const domProps = Object.fromEntries(Object.entries(rest).filter(([k]) => !FRAMER_PROPS.has(k)))
                return React.createElement('ul', domProps, children)
            }
        }
    }
})

describe('GithubRepos', () => {
    it('renders section heading', () => {
        render(<GithubRepos />)
        expect(screen.getByRole('heading', { level: 2, name: /Featured Repositories/i })).toBeInTheDocument()
    })

    it('renders featured repo names', () => {
        render(<GithubRepos />)
        expect(screen.getByText('schoolsys1')).toBeInTheDocument()
        expect(screen.getByText('USTAWI1')).toBeInTheDocument()
        expect(screen.getByText('Traviona1')).toBeInTheDocument()
    })

    it('does not show zero star or fork counts', () => {
        render(<GithubRepos />)
        expect(screen.queryByText(/^0$/)).not.toBeInTheDocument()
    })

    it('renders repo descriptions', () => {
        render(<GithubRepos />)
        expect(screen.getByText(/Full-Stack Django\/PostgreSQL School ERP/)).toBeInTheDocument()
    })

    it('renders repo links with correct href', () => {
        render(<GithubRepos />)
        const link = screen.getByRole('link', { name: /schoolsys1/i })
        expect(link).toHaveAttribute('href', 'https://github.com/captainblair/schoolsys1')
    })

    it('always renders featured repos without API data', () => {
        const { container } = render(<GithubRepos />)
        expect(container.querySelectorAll('a')).toHaveLength(3)
    })
})
