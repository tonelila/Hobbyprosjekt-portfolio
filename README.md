# Tone-Lill Aarsheim – portefølje

Personlig porteføljenettside, designet i Figma og utviklet med React og TypeScript.
Siden er under arbeid. 

🔗 **Live:** https://tone-lill.vercel.app

## Teknologier

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) som byggeverktøy
- CSS Modules for styling
- Publisert på [Vercel](https://vercel.com) med automatisk deploy fra GitHub

## Kom i gang

Krever [Node.js](https://nodejs.org) (LTS).

```bash
# 1. Gå til prosjektmappen
cd portfolio

# 2. Installer pakker (kun første gang, eller etter nye pakker)
npm install

# 3. Start utviklingsserveren
npm run dev
```

Åpne http://localhost:5173 i nettleseren. Siden oppdateres automatisk når du lagrer.
Stopp serveren med `Ctrl + C`.

## Nyttige kommandoer

| Kommando          | Hva den gjør                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Starter utviklingsserveren                      |
| `npm run build`   | Bygger siden, samme som Vercel gjør. Test før push! |
| `npm run preview` | Viser det ferdige bygget lokalt                 |
| `npm run lint`    | Sjekker koden for feil med ESLint               |

## Publisere endringer

```bash
git add .
git commit -m "Kort beskrivelse av hva du endret"
git push
```

Vercel publiserer automatisk etter hver push til `main`.

## Mappestruktur

```
src/
  components/     # Én mappe per komponent (.tsx + .module.css)
  data/           # Innhold som prosjekter og mapper (.ts)
  assets/         # Bilder
  App.tsx         # Setter sammen alle seksjonene
  index.css       # Globale stiler og CSS-variabler (farger, fonter, avstander)
```