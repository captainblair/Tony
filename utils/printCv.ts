/**
 * Print the downloadable CV using the main page print CSS.
 * Clears the document title so Edge/Chrome headers/footers do not stamp
 * the site name or date when Headers and footers are left on.
 */
export const printCv = (): void => {
    const previousTitle = document.title
    document.title = ''

    const restoreTitle = () => {
        document.title = previousTitle
        window.removeEventListener('afterprint', restoreTitle)
    }

    window.addEventListener('afterprint', restoreTitle)
    window.print()
}
