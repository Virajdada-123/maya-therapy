# Dr. Maya Reynolds — Therapy Practice Homepage

A responsive therapy practice homepage created for Dr. Maya Reynolds, PsyD, a fictional licensed clinical psychologist based in Santa Monica, California.

The website is designed to provide a calm, professional, and welcoming online presence while presenting Dr. Maya's areas of focus, therapeutic approach, office environment, and consultation information.

## Live Website

https://maya-therapy-three.vercel.app

## GitHub Repository

https://github.com/Virajdada-123/maya-therapy

## Features

- Responsive design for desktop, tablet, and mobile
- Sticky navigation bar
- Mobile navigation menu
- Smooth section navigation
- Hero section with therapist profile
- About section
- Areas of expertise
- Therapy approach and methods
- Specialties section
- Custom "Our Office" section
- Consultation call-to-action
- Contact and location information
- Responsive image layouts
- Optimized production build with Next.js

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js Image
- Vercel
- GitHub

## Project Structure

```text
maya-therapy/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── WhoIHelp.tsx
│   ├── Expertise.tsx
│   ├── Approach.tsx
│   ├── Specialties.tsx
│   ├── Office.tsx
│   ├── Consultation.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── public/
│   └── images/
│       ├── maya.png
│       ├── office-1.jpeg
│       └── office-2.jpeg
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

Getting Started
1. Clone the repository
git clone https://github.com/Virajdada-123/maya-therapy.git
cd maya-therapy

2. Install dependencies
npm install

3. Start the development server
npm run dev

Open:

http://localhost:3000
4. Create a production build
npm run build

5. Run the production build
npm start

Design Approach
The website uses a warm, minimal visual style intended to communicate calmness and professionalism.

The main visual system uses:

Warm cream backgrounds
Deep green typography and accents
Muted neutral tones
Rounded image corners
Generous spacing
Editorial-style content sections
The layout follows the structure of the provided reference therapy website while adapting the content, imagery, colors, and sections for Dr. Maya Reynolds.

A dedicated Our Office section was also added to satisfy the project requirements.

Responsive Design
The layout is designed to work across:

Desktop
Tablet
Mobile
On smaller screens, content sections stack vertically and the desktop navigation changes into a mobile menu.

Accessibility
The project includes:

Descriptive image alt text
Semantic HTML elements
Accessible navigation buttons
Responsive text sizing
Clear navigation structure
Deployment
The application is deployed using Vercel and connected directly to the GitHub repository.

Every update pushed to the main branch can be deployed through the connected Vercel project.

Known Limitations
This is a frontend-focused static therapy practice homepage.
No backend or database is implemented.
The consultation and contact actions are presentation/navigation elements rather than a working booking system.
The therapist profile and office information are based on the provided fictional project profile.
License
This project was created as part of a frontend development assignment.
