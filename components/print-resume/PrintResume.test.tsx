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
        expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    })

    it('renders biography location', () => {
        render(<PrintResume />)
        expect(screen.getByText(/Nairobi, Kenya/)).toBeInTheDocument()
    })

    it('renders contact links with labels and values', () => {
        render(<PrintResume />)
        expect(screen.getByText('GitHub:')).toBeInTheDocument()
        expect(screen.getByText('github.com/captainblair')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn:')).toBeInTheDocument()
        expect(screen.getByText('linkedin.com/in/tony-wangolo-545b23285')).toBeInTheDocument()
        expect(screen.getByText('X:')).toBeInTheDocument()
        expect(screen.getByText('x.com/Tony_Blair01')).toBeInTheDocument()
    })

    it('renders the summary description', () => {
        render(<PrintResume />)
        expect(screen.getByText(/Highly motivated Full Stack Software Engineer/)).toBeInTheDocument()
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

    it('renders experience duties', () => {
        render(<PrintResume />)
        expect(
            screen.getByText(/Spearheaded the engineering and development of a centralized digital system/)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Developed and deployed full-stack web applications using Python, Flask\/Django/)
        ).toBeInTheDocument()
        expect(screen.getByText(/Empowered community members by teaching digital literacy/)).toBeInTheDocument()
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
                name: 'Bachelor of Technology: Communications and Computer Networks',
                hidden: true
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { level: 3, name: 'Professional Backend Web Development', hidden: true })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { level: 3, name: 'Backend Web Development', hidden: true })
        ).toBeInTheDocument()
    })

    it('renders the Skills section heading', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 2, name: 'Technical Skills', hidden: true })).toBeInTheDocument()
    })

    it('renders skill group titles and tags', () => {
        render(<PrintResume />)
        expect(screen.getByRole('heading', { level: 3, name: 'Languages', hidden: true })).toBeInTheDocument()
        expect(screen.getByText(/Python · PHP · HTML5 · CSS3 · JavaScript · TypeScript/)).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Frameworks', hidden: true })).toBeInTheDocument()
        expect(
            screen.getByText(/Django · Flask · Laravel · React · Redux · SASS · TailwindCSS · Streamlit/)
        ).toBeInTheDocument()
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
