# Pokédex App

Aplicación web para buscar información de cualquier Pokémon por nombre o número, consumiendo la [PokéAPI](https://pokeapi.co/).

---

## Stack de tecnologías

| Herramienta | Versión | Rol |
|---|---|---|
| [React](https://react.dev/) | 19 | UI / componentes |
| [Vite](https://vite.dev/) | 7 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos utilitarios |
| [Lucide React](https://lucide.dev/) | 0.577 | Librería de íconos |
| [PokéAPI](https://pokeapi.co/) | — | API REST de Pokémon |
| [Docker](https://www.docker.com/) | — | Contenedores dev / prod |
| [Nginx](https://nginx.org/) | alpine | Servidor de producción |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ErrorState.jsx       # Estado de error
│   ├── LoadingState.jsx     # Estado de carga
│   ├── PokeballIcon.jsx     # Ícono SVG decorativo
│   ├── PokemonCard.jsx      # Tarjeta con info del Pokémon
│   ├── SearchBar.jsx        # Barra de búsqueda
│   ├── StatBar.jsx          # Barra de stats
│   └── TypeBadge.jsx        # Badge de tipo
├── constants/
│   └── types.js             # Colores por tipo de Pokémon
├── hooks/
│   └── usePokemon.js        # Hook: lógica de búsqueda y estados
├── services/
│   └── pokeApi.js           # Fetch a la PokéAPI
└── App.jsx
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_POKEAPI_URL=https://pokeapi.co/api/v2
```

> En Docker, la variable ya está definida en `docker-compose.dev.yml`.

---

## Levantar el proyecto

### Opción 1 — Local (Node.js)

**Requisitos:** Node.js 18+

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de entorno
echo "VITE_POKEAPI_URL=https://pokeapi.co/api/v2" > .env

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

### Opción 2 — Docker (desarrollo)

**Requisitos:** Docker Desktop

```bash
npm run docker:dev
```

Equivale a `docker compose -f docker-compose.dev.yml up`. Levanta un contenedor con Node 22, monta el código fuente como volumen y habilita hot reload mediante polling.

Abre [http://localhost:5173](http://localhost:5173).

---

### Opción 3 — Docker (producción)

Genera el build con Vite y lo sirve con Nginx:

```bash
npm run docker:build
```

Abre [http://localhost:8080](http://localhost:8080).

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server local con HMR |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Preview del build local |
| `npm run lint` | Lint con ESLint |
| `npm run docker:dev` | Contenedor de desarrollo con hot reload |
| `npm run docker:build` | Contenedor de producción con Nginx |
| `npm run docker:down` | Detiene y elimina los contenedores |
