import React from 'react'

import { render, screen } from '@testing-library/react'

import { PrimaryTechnologies } from './GithubLanguages'

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

describe('PrimaryTechnologies', () => {
    it('renders the section heading', () => {
        render(<PrimaryTechnologies />)
        expect(screen.getByRole('heading', { level: 2, name: /Primary Technologies/i })).toBeInTheDocument()
    })

    it('renders primary technology names', () => {
        render(<PrimaryTechnologies />)
        expect(screen.getByText('Python')).toBeInTheDocument()
        expect(screen.getByText('Django')).toBeInTheDocument()
        expect(screen.getByText('JavaScript')).toBeInTheDocument()
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
        expect(screen.getByText('Next.js')).toBeInTheDocument()
    })

    it('does not render misleading language percentages', () => {
        render(<PrimaryTechnologies />)
        expect(screen.queryByText(/%/)).not.toBeInTheDocument()
    })
})
