import React from 'react'

import { render, screen } from '@testing-library/react'

import { update } from '@/update'
import { formatDate } from '@/utils/date'

import { Introduce } from './Introduce'

import '@testing-library/jest-dom'


jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line next/no-img-element
    default: jest.fn(() => <img alt='mocked image' />)
}))

jest.mock('@/update', () => ({
    update: '2023-08-01T00:00:00Z'
}))

jest.mock('@/utils', () => ({
    useSiteData: () => ({
        biography: {
            name: 'Tony Wangolo Inganga',
            title: 'Full Stack Software Engineer',
            location: 'Nairobi, Kenya',
            timezone: 'East Africa Time (UTC+3)',
            availableForWork: true
        },
        contactLinks: [
            { link: 'https://github.com/captainblair', label: 'GitHub', icon: 'github' },
            { link: 'https://x.com/Tony_Blair01', label: 'X', icon: 'X' }
        ],
        experience: [
            {
                role: 'Freelance Full Stack Developer',
                period: ['01/01/2024']
            }
        ]
    })
}))

describe('Introduce Component', () => {
    it('renders links correctly', async () => {
        render(<Introduce />)

        const githubLink = await screen.findByTitle('GitHub')
        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute('href', 'https://github.com/captainblair')
    })

    it('displays facts correctly', () => {
        render(<Introduce />)

        expect(screen.getByText('1.5+ Years')).toBeInTheDocument()
        expect(screen.getByText('Experience')).toBeInTheDocument()
        expect(screen.getByText('Updated')).toBeInTheDocument()
        expect(screen.getByText(formatDate(update, 'dddd, MMM D, YYYY'))).toBeInTheDocument()
    })

    it('does not render age tracker', () => {
        render(<Introduce />)

        expect(screen.queryByText('My age')).not.toBeInTheDocument()
    })

    it('renders the description text', () => {
        render(<Introduce />)
        expect(screen.getByText(/scalable backend architecture/i)).toBeInTheDocument()
    })

    it('renders CTA buttons', () => {
        render(<Introduce />)
        expect(screen.getByText('View My Work')).toBeInTheDocument()
        expect(screen.getByText('Download CV')).toBeInTheDocument()
        expect(screen.getByText('Contact Me')).toBeInTheDocument()
    })
})
