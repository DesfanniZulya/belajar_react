import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  const API_URL =
    "https://jakpost.vercel.app/api/category/indonesia/politics/page/2"

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(result => setData(result))
  }, [])

  if (!data) return <p>Loading...</p>

  const filteredPosts = data.posts.filter(post => {
    const matchSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory =
      category === "all" || post.category === category

    return matchSearch && matchCategory
  })

  return (
    <div className="container">
      <h1 className="title">📰 Indonesia Politics News</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search news..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Politics">Politics</option>
          <option value="Indonesia">Indonesia</option>
        </select>
      </div>

      <div className="grid">
        {filteredPosts.map((post, index) => (
          <div className="card" key={index}>
            <img src={post.image} alt={post.title} />

            <div className="card-body">
              <h3>{post.title}</h3>
              <p className="category">{post.category}</p>

              <Link to={`/detail/${index}`}>
                <button>Read More →</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home