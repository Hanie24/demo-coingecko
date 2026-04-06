# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

There are no tests configured in this project.

## Architecture

This is a React 19 + TypeScript + Vite app that displays cryptocurrency data from the CoinGecko public API. Styling is done with Tailwind CSS v4 (via `@tailwindcss/vite` plugin) and the Rubik font.

### Data Flow

```
CoinGecko API
  └─ src/config/api.config.ts      — base URL constant
  └─ src/services/apiClient.ts     — generic fetchCoinGecko<T>() wrapper
  └─ src/services/endpoints.ts     — endpoint path constants (MARKETS, GLOBAL)
  └─ src/services/<domain>/
        get*.service.ts            — calls fetchCoinGecko with typed params
        use*.ts                    — React hook (useState + useEffect) over the service
```

Two data domains exist today:
- **gainers** (`src/services/gainers/`) — fetches top 3 coins by 24h price change, type `Coin`
- **global** (`src/services/global/`) — fetches global market stats, type `GlobalStats`

### Component Hierarchy (Atomic Design)

```
Atoms      — Text, Icon, Subtitle, PriceChange (leaf UI elements)
Molecules  — IconHeading (Icon + heading text)
Organisms  — Card, CryptoCard/CryptoCardList, Globals/GlobalGrid + MarketCap + TradingVolume
Templates  — Container (page wrapper), Columns (flex row layout)
Pages      — Dashboard (composes CryptoCardList + GlobalGrid inside Container)
```

- Each component lives in its own folder with a co-located `.types.ts` file.
- `src/utils/formatters.ts` contains `formatCurrency()` for USD display.
- `src/css/colors.css` holds CSS custom properties for the color palette.

### Adding a New Data Domain

1. Add the endpoint path to `src/services/endpoints.ts`.
2. Define the response type in `src/services/<domain>/<domain>.types.ts`.
3. Create `get<Domain>.service.ts` calling `fetchCoinGecko<Type>()`.
4. Create `use<Domain>.ts` hook wrapping the service with `useState`/`useEffect`.
5. Build the UI organism in `src/Components/Organism/<Domain>/`.
