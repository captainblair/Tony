import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const cv = {
    name: 'Tony Wangolo Inganga',
    title: 'Full Stack Software Engineer | Backend Systems | Cloud & Application Implementation',
    contact: 'Nairobi, Kenya | +254 111 414 441 | wangolotony4@gmail.com',
    links: 'Portfolio: tony-three.vercel.app | GitHub: github.com/captainblair | LinkedIn: linkedin.com/in/tony-wangolo-545b23285',
    summary:
        'Highly motivated Full Stack Software Engineer specializing in scalable backend architecture, robust relational database design, and end-to-end web deployment ecosystems. Proven track record of developing production-ready systems using Python, Django, Flask, JavaScript, and TypeScript. Adept at creating optimized data structures, implementing secure Role-Based Access Control (RBAC), and maximizing software utility under cloud infrastructure resource constraints.',
    projects: [
        {
            title: 'Ustawi | The Smart Rental & Property Platform',
            stack: 'Python | Django | Next.js | PostgreSQL (Neon Serverless) | Vercel',
            details:
                'Developed a full-stack, two-sided rental marketplace matching tenants with property managers. Optimized database queries and implemented serverless PostgreSQL schema connections to scale performance metrics efficiently while respecting tight environment resource baselines.',
            links: 'Live Demo: ustawi-1.vercel.app | GitHub: github.com/captainblair/USTAWI1'
        },
        {
            title: 'SchoolSys | School Management & Operations Platform',
            stack: 'Python | Django | PostgreSQL | Render | TailwindCSS',
            details:
                'Built and shipped a production-ready, full-stack enterprise school administration platform. Architected granular role-based dashboards to manage students, teachers, and administrators. Optimized database schemas for profile approvals, attendance, financial fee records, and library loans.',
            links: 'GitHub: github.com/captainblair/schoolsys1'
        }
    ],
    experience: [
        {
            title: 'ICT Lead | ODM Comrades Chapter',
            period: 'January 2026 | Present | Nairobi, Kenya',
            bullets: [
                'Led frontend engineering for a centralized university digital registration platform built with PHP and Laravel, delivering responsive, role-aware interfaces and multi-step registration workflows that supported secure onboarding of 800+ active student records with zero downtime.',
                'Engineered client-side validation layers, dashboard UI components, and data capture flows across multi-campus university ecosystems, improving operational data extraction efficiency by 40%.',
                'Collaborated with backend engineers to integrate Laravel REST endpoints and structure high-volume concurrent submission interfaces with clean, maintainable frontend architecture.'
            ]
        },
        {
            title: 'Freelance Full Stack Developer | Remote',
            period: '2024 | Present',
            bullets: [
                'Architected, tested, and deployed end-to-end full-stack web platforms using Python, Flask, Django, Streamlit, and MySQL, focusing on secure authentication modules and robust backend query structures.',
                'Implemented machine learning and analytical models into custom dashboard interfaces, providing automated decision support tools and predictive analysis layers for localized business platforms.',
                'Authored clean, maintainable, and reusable codebase patterns, collaborating iteratively to integrate frontend responsive designs with complex relational data systems.'
            ]
        },
        {
            title: 'Volunteer Computer Skills Trainer | LEA Organization',
            period: 'January 2025 | June 2026 | Nairobi, Kenya',
            bullets: [
                'Upskilled and trained over 50 community members in digital literacy, version control fundamentals using Git and GitHub, and core programming paradigms.',
                'Orchestrated technical engineering workshops, guiding junior learners through local workflow environments, structural web basics, and clean programming code principles.'
            ]
        }
    ],
    education: [
        'Bachelor of Technology | Communications and Computer Networks | Technical University of Kenya | Expected Graduation 2027',
        'Professional Backend Web Development Certification | ALX Africa | Graduated 2025',
        'Backend Web Development | ALX Africa | Graduated 2025',
        'Artificial Intelligence (AI) | ALX Africa | Graduated 2025'
    ],
    skills: [
        'Programming Languages: Python | TypeScript | PHP | SQL | HTML5 | CSS3 | Sass',
        'Frameworks & Libraries: Django | Flask | Next.js | React | Laravel | TailwindCSS | Streamlit | Redux',
        'Databases & Storage: PostgreSQL | MySQL | SQL Server | Supabase',
        'Infrastructure & DevOps: Docker | Linux | Git | GitHub Actions | Jenkins | Render | Vercel',
        'Core Competencies: API Design | Role-Based Access Control (RBAC) | Data Analysis | System Architecture'
    ]
}

const pdf = await PDFDocument.create()
const regular = await pdf.embedFont(StandardFonts.Helvetica)
const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
const pageSize = [595.28, 841.89]
const margin = 44
const text = rgb(0, 0, 0)
const accent = rgb(0.95, 0.65, 0.03)
let page
let y

const addPage = () => {
    page = pdf.addPage(pageSize)
    y = pageSize[1] - margin
}

const linesFor = (value, font, size, width) => {
    const words = value.split(/\s+/)
    const lines = []
    let line = ''
    words.forEach((word) => {
        const candidate = line ? `${line} ${word}` : word
        if (font.widthOfTextAtSize(candidate, size) <= width) {
            line = candidate
        } else {
            if (line) lines.push(line)
            line = word
        }
    })
    if (line) lines.push(line)
    return lines
}

const ensure = (height) => {
    if (y - height < margin) addPage()
}

const drawLines = (lines, x, size, lineHeight, font = regular) => {
    ensure(lines.length * lineHeight)
    lines.forEach((line) => {
        page.drawText(line, { x, y, size, font, color: text })
        y -= lineHeight
    })
}

const paragraph = (value, indent = 0, size = 9.2, lineHeight = 12) => drawLines(linesFor(value, regular, size, pageSize[0] - margin * 2 - indent), margin + indent, size, lineHeight)

const section = (title) => {
    ensure(28)
    page.drawText(title.toUpperCase(), { x: margin, y, size: 11.5, font: bold, color: text })
    y -= 5
    page.drawLine({ start: { x: margin, y }, end: { x: pageSize[0] - margin, y }, thickness: 1.4, color: accent })
    y -= 12
}

const role = (title, period, bullets) => {
    ensure(42)
    page.drawText(title, { x: margin, y, size: 9.8, font: bold, color: text })
    y -= 12
    page.drawText(period, { x: margin, y, size: 8.6, font: bold, color: text })
    y -= 12
    bullets.forEach((bullet) => {
        const lines = linesFor(bullet, regular, 8.8, pageSize[0] - margin * 2 - 12)
        ensure(lines.length * 11 + 3)
        page.drawText('-', { x: margin, y, size: 8.8, font: bold, color: text })
        lines.forEach((line, index) => {
            page.drawText(line, { x: margin + 10, y, size: 8.8, font: regular, color: text })
            y -= 11
        })
        y -= 2
    })
    y -= 4
}

addPage()
page.drawText(cv.name, { x: margin, y, size: 21, font: bold, color: text })
y -= 20
page.drawText(cv.title, { x: margin, y, size: 10.5, font: bold, color: text })
y -= 15
page.drawText(cv.contact, { x: margin, y, size: 8.8, font: regular, color: text })
y -= 12
page.drawText(cv.links, { x: margin, y, size: 7.8, font: regular, color: text })
y -= 12
page.drawLine({ start: { x: margin, y }, end: { x: pageSize[0] - margin, y }, thickness: 2, color: accent })
y -= 15

section('Professional Summary')
paragraph(cv.summary)
y -= 8

section('Core Production Projects')
cv.projects.forEach((project) => {
    ensure(60)
    page.drawText(project.title, { x: margin, y, size: 9.8, font: bold, color: text })
    y -= 12
    paragraph(`Technical Stack: ${project.stack}`, 0, 8.7, 11)
    paragraph(project.details, 0, 8.7, 11)
    paragraph(project.links, 0, 8.2, 10)
    y -= 6
})

section('Professional Experience')
cv.experience.forEach((item) => role(item.title, item.period, item.bullets))

section('Education')
cv.education.forEach((item) => {
    paragraph(item, 0, 8.8, 11)
    y -= 2
})

section('Technical Skills')
cv.skills.forEach((item) => {
    paragraph(item, 0, 8.8, 11)
    y -= 2
})

await mkdir(join(process.cwd(), 'public'), { recursive: true })
await writeFile(join(process.cwd(), 'public', 'tony_wangolo_cv.pdf'), await pdf.save())
