import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Footer } from './Footer'

describe('Footer', () => {
    it('renders copyright with full name', () => {
        render(<Footer />)
        expect(screen.getByText(/Tony Wangolo Inganga/)).toBeInTheDocument()
    })

    it('renders current year', () => {
        render(<Footer />)
        expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
    })

    it('renders back to top button', () => {
        render(<Footer />)
        expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument()
    })

    it('scrolls to top on button click', () => {
        window.scrollTo = jest.fn()
        render(<Footer />)
        fireEvent.click(screen.getByRole('button', { name: /back to top/i }))
        expect(window.scrollTo).toHaveBeenCalledWith({ behavior: 'smooth', top: 0 })
    })
})
