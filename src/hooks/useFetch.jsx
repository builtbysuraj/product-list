import { useEffect, useState } from "react"

export default function useFetch() {
  const [data, setData] = useState([])
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(false)
  const limit = 18

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    )
    const data = await res.json()
    setData((prevData) => [...prevData, ...data.products])
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [skip])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setSkip((prev) => prev + limit)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { data, loading }
}
