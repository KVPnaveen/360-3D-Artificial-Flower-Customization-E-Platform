import { useEffect, useState } from 'react'

export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fn()
      .then((res) => active && setData(res.data || res))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))
    return () => (active = false)
  }, deps)

  return { data, loading, error }
}
