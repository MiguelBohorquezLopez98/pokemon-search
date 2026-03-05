const LoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 gap-4">

            <div className="w-12 h-12 rounded-full border-4 border-amber-200 border-t-red-600 border-b-blue-700 animate-spin" />

            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Buscando Pokémon...
            </p>

        </div>
    )
}

export default LoadingState