import React from 'react'

import { render, screen } from '@testing-library/react'

import { PrintResume } from './PrintResume'

jest.mock('@/public/tony.jpeg', () => ({
    __esModule: true,
    default: 'mocked-tony.jpeg'
}))

describe('PrintResume', () => {
    it('renders the print resume container with correct id', () => {
        render(<PrintResume />)
        expect(document.getElementById('print-resume')).toBeInTheDocument()
    })

    it('renders biography name and title', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', { level: 1, name: 'Tony Wangolo Inganga', hidden: true })
        ).toBeInTheDocument()
        expect(screen.getByText(/Software Engineer \| 1\.5\+ Years Experience/)).toBeInTheDocument()
    })

    it('renders biography location', () => {
        render(<PrintResume />)
        expect(screen.getByText(/Nairobi, Kenya \| \+254 111 414 441/)).toBeInTheDocument()
    })

    it('renders clickable contact links including portfolio after email', () => {
        render(<PrintResume />)
        expect(screen.getByText('Portfolio:')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'https://tony-three.vercel.app', hidden: true })).toHaveAttribute(
            'href',
            'https://tony-three.vercel.app'
        )
        expect(screen.getByText('GitHub:')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'https://github.com/captainblair', hidden: true })).toHaveAttribute(
            'href',
            'https://github.com/captainblair'
        )
        expect(screen.getByText('LinkedIn:')).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: 'https://www.linkedin.com/in/tony-wangolo-545b23285/', hidden: true })
        ).toHaveAttribute('href', 'https://www.linkedin.com/in/tony-wangolo-545b23285/')
        expect(screen.getByRole('link', { name: 'wangolotony4@gmail.com', hidden: true })).toHaveAttribute(
            'href',
            'mailto:wangolotony4@gmail.com'
        )
    })

    it('renders clickable project live and repository links', () => {
        render(<PrintResume />)
        expect(screen.getByRole('link', { name: 'https://schoolsys-00mj.onrender.com/', hidden: true })).toHaveAttribute(
            'href',
            'https://schoolsys-00mj.onrender.com/'
        )
        expect(
            screen.getByRole('link', { name: 'https://github.com/captainblair/schoolsys1', hidden: true })
        ).toHaveAttribute('href', 'https://github.com/captainblair/schoolsys1')
    })

    it('renders the summary description', () => {
        render(<PrintResume />)
        expect(
            screen.getByText(/Highly motivated Full Stack Software Engineer specializing in scalable backend architecture/)
        ).toBeInTheDocument()
    })

    it('renders the Core Production Projects section', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', { level: 2, name: 'Core Production Projects', hidden: true })
        ).toBeInTheDocument()
        expect(screen.getByText(/SchoolSys \| School Management & Operations Platform/)).toBeInTheDocument()
        expect(screen.getByText(/Ustawi \| The Smart Rental & Property Platform/)).toBeInTheDocument()
    })

    it('renders the Experience section heading', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', { level: 2, name: 'Professional Experience', hidden: true })
        ).toBeInTheDocument()
    })

    it('renders experience roles', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', { level: 3, name: 'ICT Lead | ODM Comrades Chapter', hidden: true })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { level: 3, name: 'Freelance Full Stack Developer | Remote', hidden: true })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                level: 3,
                name: 'Volunteer Computer Skills Trainer | LEA Organization',
                hidden: true
            })
        ).toBeInTheDocument()
    })

    it('renders experience duties with metrics', () => {
        render(<PrintResume />)
        expect(
            screen.getByText(
                /Led frontend engineering for a centralized university digital registration platform built with PHP and Laravel/
            )
        ).toBeInTheDocument()
        expect(screen.getByText(/improving operational data extraction efficiency by 40%/)).toBeInTheDocument()
        expect(screen.getByText(/Upskilled and trained over 50 community members/)).toBeInTheDocument()
    })

    it('renders the Education section heading', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 2, name: 'Education', hidden: true })).toBeInTheDocument()
    })

    it('renders education degrees', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', {
                level: 3,
                name: 'Bachelor of Technology | Communications and Computer Networks',
                hidden: true
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                level: 3,
                name: 'Professional Backend Web Development Certification',
                hidden: true
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { level: 3, name: 'Backend Web Development', hidden: true })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { level: 3, name: 'Artificial Intelligence (AI)', hidden: true })
        ).toBeInTheDocument()
        expect(screen.getAllByText('Graduated 2025')).toHaveLength(3)
        expect(screen.getAllByText('ALX Africa')).toHaveLength(3)
    })

    it('renders the Skills section heading', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 2, name: 'Technical Skills', hidden: true })).toBeInTheDocument()
    })

    it('renders skill group titles and tags', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 3, name: 'Languages', hidden: true })).toBeInTheDocument()
        expect(screen.getByText(/Python \| JavaScript \| TypeScript \| PHP \| SQL/)).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Frameworks & Libraries', hidden: true })).toBeInTheDocument()
        expect(
            screen.getByText(/Django \| Flask \| Next.js \| React \| Laravel \| TailwindCSS \| Streamlit \| Redux/)
        ).toBeInTheDocument()
    })

    it('renders the header photo only', () => {
        render(<PrintResume />)
        const image = screen.getByRole('img', { name: 'Tony Wangolo Inganga', hidden: true })
        expect(image).toHaveAttribute('src', '/tony.jpeg')
        expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(1)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<PrintResume />)
        expect(asFragment()).toMatchSnapshot()
    })
})
