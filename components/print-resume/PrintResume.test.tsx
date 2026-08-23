import React from 'react'

import { render, screen } from '@testing-library/react'

import { PrintResume } from './PrintResume'

describe('PrintResume', () => {
    beforeEach(() => render(<PrintResume />))

    it('renders the updated header and contact links', () => {
        expect(
            screen.getByRole('heading', { level: 1, name: 'Tony Wangolo Inganga', hidden: true })
        ).toBeInTheDocument()
        expect(screen.getByText('Software Engineer | Backend & Full Stack Development')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Portfolio', hidden: true })).toHaveAttribute(
            'href',
            'https://tony-three.vercel.app'
        )
        expect(screen.getAllByRole('link', { name: 'GitHub', hidden: true })[0]).toHaveAttribute(
            'href',
            'https://github.com/captainblair'
        )
        expect(screen.getByRole('link', { name: 'LinkedIn', hidden: true })).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/tony-wangolo-545b23285/'
        )
    })

    it('uses the ATS-focused professional summary', () => {
        expect(
            screen.getByRole('heading', { level: 2, name: 'Professional Summary', hidden: true })
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Software Engineer specializing in backend and full-stack web development/)
        ).toBeInTheDocument()
    })

    it('keeps the four two-column achievement cards', () => {
        expect(screen.getByRole('heading', { level: 2, name: 'Key Achievements', hidden: true })).toBeInTheDocument()
        expect(screen.getByText('40% Data Workflow Improvement')).toBeInTheDocument()
        expect(screen.getByText('800+ Records Supported')).toBeInTheDocument()
        expect(screen.getByText('50+ People Trained')).toBeInTheDocument()
        expect(screen.getByText('30% Predictive Analytics Improvement')).toBeInTheDocument()
    })

    it('renders the standard CV sections and revised education', () => {
        ;[
            'Professional Experience',
            'Education',
            'Technical Skills',
            'Projects',
            'Certifications',
            'Volunteer Experience'
        ].forEach((title) => {
            expect(screen.getByRole('heading', { level: 2, name: title, hidden: true })).toBeInTheDocument()
        })
        expect(screen.getByText('Bachelor of Technology in Communications and Computer Networks')).toBeInTheDocument()
        expect(screen.getByText('Expected 2027')).toBeInTheDocument()
    })

    it('includes Ustawi, OCC, and SchoolSys projects with clean links', () => {
        expect(screen.getByText('Ustawi – Smart Rental & Property Platform')).toBeInTheDocument()
        expect(
            screen.getByText('ODM Comrades Chapter (OCC) – Digital Registration & Management Platform')
        ).toBeInTheDocument()
        expect(screen.getByText('SchoolSys – School Management & Operations Platform')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Live Demo', hidden: true })).toHaveAttribute(
            'href',
            'https://ustawi-1.vercel.app/'
        )
    })
})
