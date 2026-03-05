import TypeBadge from "./TypeBadge"
import StatBar from "./StatBar"

const PokemonCard = ({ pokemon }) => {
    const formattedId = String(pokemon.id).padStart(3, "0")

    const heightInMeters = (pokemon.height / 10).toFixed(1)  // decímetros → metros
    const weightInKg = (pokemon.weight / 10).toFixed(1)  // hectogramos → kg

    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return (
        <div className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden shadow-[6px_6px_0px_#F4C300]">
            <div className="bg-red-600 px-6 py-2.5 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-sky-300 to-blue-600 border-2 border-white shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
                <div className="flex gap-1.5 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-white/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-white/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-white/40" />
                </div>
                <span className="ml-auto font-mono text-xs text-white/80 tracking-widest uppercase">
                    Pokédex · #{formattedId}
                </span>
            </div>

            {/* ── Header ── */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-7 bg-linear-to-br from-amber-50 to-yellow-50 border-b-2 border-amber-100 relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border-24 border-red-600/5 pointer-events-none" />

                {/* Imagen del Pokémon */}
                <div className="shrink-0 w-36 h-36 bg-linear-to-br from-yellow-100 to-amber-200 border-2 border-amber-200 rounded-2xl flex items-center justify-center">
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="w-28 h-28 object-contain drop-shadow-lg animate-bounce"
                        style={{ animationDuration: "3s" }}
                    />
                </div>

                {/* Info principal */}
                <div className="flex-1 pt-1">
                    <span className="font-mono text-xs text-red-600 font-medium tracking-wide">
                        #{formattedId}
                    </span>
                    <h2 className="font-black text-5xl text-slate-800 leading-none tracking-wide mt-1 mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {formattedName}
                    </h2>

                    {/* Tipos */}
                    <div className="flex justify-center md:justify-start gap-2 flex-wrap mb-4">
                        {pokemon.types.map((type) => (
                            <TypeBadge key={type} type={type} />
                        ))}
                    </div>

                    {/* Stats: altura, peso, exp */}
                    <div className="flex border-2 border-amber-200 rounded-xl overflow-hidden w-fit shadow-[2px_2px_0px_#F4C300] bg-white">
                        <div className="px-4 py-2 text-center">
                            <span className="block text-xl font-black text-red-600 leading-tight"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                {heightInMeters}m
                            </span>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                Altura
                            </span>
                        </div>
                        <div className="px-4 py-2 text-center border-x-2 border-amber-200">
                            <span className="block text-xl font-black text-red-600 leading-tight"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                {weightInKg}kg
                            </span>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                Peso
                            </span>
                        </div>
                        <div className="px-4 py-2 text-center">
                            <span className="block text-xl font-black text-red-600 leading-tight"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                {pokemon.baseExperience ?? "—"}
                            </span>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                Exp.
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Stats + habilidades ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-amber-100 bg-white">

                {/* Stats */}
                <div className="p-6">
                    <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 pb-2 border-b-2 border-amber-100">
                        Stats base
                    </h3>
                    {pokemon.stats.map((stat) => (
                        <StatBar key={stat.name} name={stat.name} value={stat.value} />
                    ))}
                </div>

                {/* Habilidades + Detalles */}
                <div className="p-6">
                    <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 pb-2 border-b-2 border-amber-100">
                        Habilidades
                    </h3>

                    <div className="flex flex-col gap-2 mb-6">
                        {pokemon.abilities.map((ability) => (
                            <div
                                key={ability.name}
                                className="flex items-center justify-between bg-amber-50 border-2 border-amber-100 rounded-lg px-4 py-2 hover:border-red-300 transition-colors"
                            >
                                <span className="text-sm font-semibold text-slate-700 capitalize">
                                    {ability.name.replace(/-/g, " ")}
                                </span>
                                {ability.isHidden && (
                                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                                        Hidden
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 pb-2 border-b-2 border-amber-100">
                        Detalles
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ID</span>
                            <span className="text-sm font-bold text-slate-700">#{pokemon.id}</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Movimientos</span>
                            <span className="text-sm font-bold text-slate-700">{pokemon.moves}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PokemonCard