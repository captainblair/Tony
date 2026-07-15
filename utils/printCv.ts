const HIGH_CONTRAST_PRINT_CSS = `
    @page
        size: A4
        margin: 12mm 14mm

    html, body
        margin: 0
        padding: 0
        background: #fff !important
        color: #000 !important
        -webkit-print-color-adjust: exact
        print-color-adjust: exact

    #print-resume
        display: block !important
        position: static !important
        left: auto !important
        top: auto !important
        width: auto !important
        overflow: visible !important
        visibility: visible !important
        pointer-events: auto !important
        color: #000 !important
        background: #fff !important

    #print-resume p,
    #print-resume li,
    #print-resume h1,
    #print-resume h2,
    #print-resume h3,
    #print-resume span
        color: #000 !important
        opacity: 1 !important
        -webkit-print-color-adjust: exact
        print-color-adjust: exact

    #print-resume a,
    #print-resume a:visited
        color: #003d99 !important
        text-decoration: underline !important
        font-weight: 600 !important
`

const absolutizeImageSources = (doc: Document): void => {
    doc.querySelectorAll('img').forEach((img) => {
        img.remove()
    })
}

export const printCv = (): void => {
    const resume = document.getElementById('print-resume')

    if (!resume) {
        window.print()
        return
    }

    const iframe = document.createElement('iframe')
    iframe.setAttribute('aria-hidden', 'true')
    iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;'
    document.body.appendChild(iframe)

    const frameWindow = iframe.contentWindow
    const frameDoc = frameWindow?.document

    if (!frameWindow || !frameDoc) {
        document.body.removeChild(iframe)
        window.print()
        return
    }

    const pageStyles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map((node) => node.outerHTML)
        .join('\n')

    frameDoc.open()
    frameDoc.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title></title>
    ${pageStyles}
    <style>${HIGH_CONTRAST_PRINT_CSS}</style>
</head>
<body>${resume.outerHTML}</body>
</html>`)
    frameDoc.close()

    const cleanup = () => {
        window.removeEventListener('afterprint', cleanup)

        if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe)
        }
    }

    const triggerPrint = () => {
        absolutizeImageSources(frameDoc)
        frameWindow.focus()
        frameWindow.print()
        window.addEventListener('afterprint', cleanup)
        window.setTimeout(cleanup, 3000)
    }

    if (frameDoc.readyState === 'complete') {
        window.setTimeout(triggerPrint, 150)
    } else {
        iframe.onload = () => window.setTimeout(triggerPrint, 150)
    }
}
