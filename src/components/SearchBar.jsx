import { useState } from "react"

const SearchBar = ({ onSearch, loading }) => {

    const [query, setQuery] = useState("")

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch()
    }

    return (
        <div className="mb-8">
            {/* ── Barra de búsqueda ── */}
            <div className="flex items-center gap-2 bg-white border-2 border-red-600 rounded-2xl px-5 py-2 shadow-[4px_4px_0px_#F4C300] focus-within:shadow-[4px_4px_0px_#F4C300] transition-all">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ingresa nombre o id del pokémon"
                    disabled={loading}
                    className="flex-1 bg-transparent outline-none text-slate-800 font-medium disabled:opacity-50"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading || !query.trim()}
                    className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl transition-all active:scale-95 shadow-[0px_3px_0px_#7a0000] active:shadow-none active:translate-y-0.5"
                >
                    {loading ? "Buscando..." : "Buscar"}
                </button>
            </div>
        </div>
    )
}

export default SearchBar