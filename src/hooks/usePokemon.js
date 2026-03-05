import { useState, useCallback } from 'react'
import { getPokemon } from '../services/pokeApi'

export default function usePokemon() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchPokemon = useCallback(async (nameOrId) => {
    setLoading(true)
    setError(null)
    setPokemon(null)

    try {
      const data = await getPokemon(nameOrId)
      setPokemon(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { pokemon, loading, error, fetchPokemon }
}
