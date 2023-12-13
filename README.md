## Requirement
- Next.js 14.0.4

## Getting Started

1. install nextjs :
```bash
npx create-next-app@latest ./
```
- TypeScript : no
- ESLint : yes
- Tailwind CSS : no
- src/ directory : no
- App Router : no
- customize the default import alias : no

2. jalankan program
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Cara setting port

1. setting hanya 1 port diubah
Jika menggunakan 1 port :
pada file package.json ubah kode berikut.
```bash
"scripts": {
    "dev": "next dev -p 4000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

pada script diatas port menjadi 4000. 
jika menjalankkanyan
```bash
npm run dev
```
url digunakan : 
http://localhost:4000/


2. setting menjadi 2 port
Jika menggunakan 1 port :
pada file package.json ubah kode berikut.
```bash
"scripts": {
    "dev:3001": "next dev -p 3001",
    "dev:3002": "next dev -p 3002",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
},
```

pada script diatas port menjadi 4000. 
jika menjalankkanyan
```bash
npm run dev:3001
npm run dev:3002
```
http://localhost:3001/
http://localhost:3002/