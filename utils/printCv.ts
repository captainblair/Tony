/**
 * Print only the CV — pause huge canvases first so Edge/Chrome don't
 * take minutes rasterizing the starfield into the PDF.
 */
export const printCv = (): void => {
    const previousTitle = document.title
    document.title = ''
    document.body.classList.add('printing-cv')

    const canvasSnapshots = Array.from(document.querySelectorAll('canvas')).map((canvas) => ({
        canvas,
        width: canvas.width,
        height: canvas.height,
        display: canvas.style.display
    }))

    // Collapsing the starfield canvas is what actually makes Save as PDF fast
    canvasSnapshots.forEach(({ canvas }) => {
        canvas.style.display = 'none'
        canvas.width = 1
        canvas.height = 1
    })

    const restore = () => {
        document.title = previousTitle
        document.body.classList.remove('printing-cv')

        canvasSnapshots.forEach(({ canvas, width, height, display }) => {
            canvas.style.display = display
            canvas.width = width
            canvas.height = height
        })

        window.dispatchEvent(new Event('resize'))
        window.removeEventListener('afterprint', restore)
    }

    window.addEventListener('afterprint', restore)
    window.setTimeout(restore, 5000)

    requestAnimationFrame(() => {
        window.print()
    })
}
