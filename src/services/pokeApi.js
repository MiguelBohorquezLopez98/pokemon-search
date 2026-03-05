const BASE_URL = import.meta.env.VITE_POKEAPI_URL
export const getPokemon = async (nameOrId) => {

    const url = `${BASE_URL}/pokemon/${nameOrId.toLowerCase().trim()}`
    let response
    try {
        response = await fetch(url)
    } catch {
        throw new Error('No se pudo conectar con la PokéAPI. Revisa tu conexión.')
    }

    if (response.status === 404) {
        throw new Error(`Pokémon "${nameOrId}" no encontrado`)
    }

    if (!response.ok) {
        throw new Error(`Error del servidor (${response.status}). Intenta de nuevo.`)
    }

    let data
    try {
        data = await response.json()
    } catch {
        throw new Error('La respuesta de la API no es válida.')
    }
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        baseExperience: data.base_experience,
        types: data.types.map(t => t.type.name),
        abilities: data.abilities.map(a => ({
            name: a.ability.name,
            isHidden: a.is_hidden,
        })),
        stats: data.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat,
        })),
        image: data.sprites.other["official-artwork"].front_default
            || data.sprites.front_default,
        moves: data.moves.length,
    }
}