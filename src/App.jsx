import './App.css'
import usePokemon from "./hooks/usePokemon"
import SearchBar from "./components/SearchBar"
import PokemonCard from "./components/PokemonCard"
import LoadingState from "./components/LoadingState"
import ErrorState from "./components/ErrorState"


const PokeballIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-5 animate-[spin_6s_linear_infinite]">
    <circle cx="50" cy="50" r="46" fill="white" stroke="#D4C99A" strokeWidth="3" />
    <path d="M4 50 A46 46 0 0 1 96 50 Z" fill="#CC0000" />
    <rect x="4" y="47" width="92" height="6" fill="#1a1a2e" />
    <circle cx="50" cy="50" r="13" fill="white" stroke="#1a1a2e" strokeWidth="4" />
    <circle cx="50" cy="50" r="6" fill="#FFF9E6" stroke="#D4C99A" strokeWidth="2" />
  </svg>
)

function App() {
  const { pokemon, loading, error, fetchPokemon } = usePokemon()


  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── Header ── */}
        <header className="text-center mb-10">
          <h1
            className="text-8xl font-bold"
          >
            POKÉDEX
          </h1>

        </header>
        <SearchBar onSearch={fetchPokemon} loading={loading} />
        {loading && <LoadingState />}
        {error && !loading && <ErrorState message={error} />}
        {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
        {!pokemon && !loading && !error && (
          <div className="text-center py-14">
            <PokeballIcon />
            <h3
              className="text-2xl text-slate-400 tracking-widest mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ¡LISTO PARA BUSCAR!
            </h3>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Ingresa el nombre o número de un pokémon<br />
              y presiona Buscar para ver su información
            </p>
          </div>
        )}

      </div>
    </>
  )
}

export default App
