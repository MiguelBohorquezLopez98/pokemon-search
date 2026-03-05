import './App.css'
import usePokemon from "./hooks/usePokemon"
import SearchBar from "./components/SearchBar"
import PokemonCard from "./components/PokemonCard"
import LoadingState from "./components/LoadingState"
import ErrorState from "./components/ErrorState"
import PokeballIcon from "./components/PokeballIcon"

function App() {
  const { pokemon, loading, error, fetchPokemon } = usePokemon()


  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── Header ── */}
        <header className="text-center mb-10">
          <h1
            className="text-5xl md:text-8xl font-bold"
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
