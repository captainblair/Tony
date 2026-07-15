/** Fast CV print: blank title (no date/URL headers) + immediate print dialog. */
export const printCv = (): void => {
    const previousTitle = document.title
    document.title = ''

    const restore = () => {
        document.title = previousTitle
        window.removeEventListener('afterprint', restore)
    }

    window.addEventListener('afterprint', restore)
    // Restore title even if afterprint is delayed/missed
    window.setTimeout(restore, 1000)

    requestAnimationFrame(() => {
        window.print()
    })
}
