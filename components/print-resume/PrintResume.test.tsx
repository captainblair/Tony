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
        expect(screen.getByText('Junior Full Stack Developer')).toBeInTheDocument()
    })

    it('renders biography location', () => {
        render(<PrintResume />)
        expect(screen.getByText(/Nairobi, Kenya \| \+254 111 414 441/)).toBeInTheDocument()
    })

    it('renders contact links with labels and https hrefs', () => {
        render(<PrintResume />)
        expect(screen.getByText('GitHub:')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'https://github.com/captainblair', hidden: true })).toHaveAttribute(
            'href',
            'https://github.com/captainblair'
        )
        expect(screen.getByText('LinkedIn:')).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: 'https://www.linkedin.com/in/tony-wangolo-545b23285/', hidden: true })
        ).toHaveAttribute('href', 'https://www.linkedin.com/in/tony-wangolo-545b23285/')
        expect(screen.getByText('X:')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'https://x.com/Tony_Blair01', hidden: true })).toHaveAttribute(
            'href',
            'https://x.com/Tony_Blair01'
        )
    })

    it('renders clickable project live and repository links', () => {
        render(<PrintResume />)
        expect(screen.getByRole('link', { name: 'https://schoolsys-00mj.onrender.com/', hidden: true })).toHaveAttribute(
            'href',
            'https://schoolsys-00mj.onrender.com/'
        )
        expect(screen.getByRole('link', { name: 'https://github.com/captainblair/schoolsys1', hidden: true })).toHaveAttribute(
            'href',
            'https://github.com/captainblair/schoolsys1'
        )
    })

    it('renders the summary description', () => {
        render(<PrintResume />)
        expect(
            screen.getByText(/Junior Full Stack Developer specializing in backend development with Python, Django, REST APIs/)
        ).toBeInTheDocument()
    })

    it('renders the Core Production Projects section', () => {
        render(<PrintResume />)
        expect(
            screen.getByRole('heading', { level: 2, name: 'Core Production Projects', hidden: true })
        ).toBeInTheDocument()
        expect(screen.getByText(/SchoolSys \| School Management & Operations Platform/)).toBeInTheDocument()
        expect(screen.getByText(/Ustawi \| Smart Rental \& Property Platform/)).toBeInTheDocument()
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
            screen.getByRole('heading', { level: 3, name: 'ICT Lead (Volunteer) | ODM Comrades Chapter', hidden: true })
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

    it('renders experience duties with believable metrics', () => {
        render(<PrintResume />)
        expect(
            screen.getByText(
                /Led frontend development for a university digital registration platform built using PHP and Laravel/
            )
        ).toBeInTheDocument()
        expect(screen.getByText(/supporting registration of over 800 students/)).toBeInTheDocument()
        expect(screen.getByText(/Trained over 50 community members/)).toBeInTheDocument()
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
            screen.getByRole('heading', { level: 3, name: 'Professional Backend Web Development Certification', hidden: true })
        ).toBeInTheDocument()
    })

    it('renders the Skills section heading', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 2, name: 'Technical Skills', hidden: true })).toBeInTheDocument()
    })

    it('renders skill group titles and tags', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 3, name: 'Languages', hidden: true })).toBeInTheDocument()
        expect(screen.getByText(/Python \| JavaScript \| TypeScript \| SQL \| PHP \| HTML\/CSS/)).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Frameworks & Libraries', hidden: true })).toBeInTheDocument()
        expect(
            screen.getByText(
                /Django \| Django REST Framework \| React \| Next.js \| Flask \| Laravel \| Tailwind CSS \| Streamlit/
            )
        ).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Tools & Deployment', hidden: true })).toBeInTheDocument()
    })

    it('renders the tony image with the biography name as alt text', () => {
        render(<PrintResume />)
        const images = screen.getAllByTestId('project-image')
        expect(images[0]).toHaveAttribute('alt', 'Tony Wangolo Inganga')
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<PrintResume />)
        expect(asFragment()).toMatchSnapshot()
    })
})
