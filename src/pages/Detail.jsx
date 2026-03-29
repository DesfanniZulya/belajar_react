import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

function Detail() {
  const { index } = useParams()
  const [post, setPost] = useState(null)

  const API_URL =
    "https://jakpost.vercel.app/api/category/indonesia/politics/page/2"

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(result => {
        setPost(result.posts[index])
      })
  }, [index])

  if (!post) return <p>Loading...</p>

  return (
    <div className="detail-wrapper">

      <Link to="/" className="back-btn">← Kembali</Link>

      <div className="detail-header">
        <h1>{post.title}</h1>

        <div className="meta">
          <span>📂 {post.category}</span>
          <span>🗓 {post.pusblised_at}</span>
        </div>
      </div>

      {post.premium_badge && (
        <p className="premium">⭐ {post.premium_badge}</p>
      )}

      <div className="image-container">
        <img src={post.image} alt={post.title} />
        <p className="caption">Sumber gambar: Jakarta Post</p>
      </div>

      <div className="detail-content">
        <ReactMarkdown>{post.headline}</ReactMarkdown>
      </div>

      <hr className="divider" />

      <div className="info-box">
        <h3>📌 Informasi Artikel</h3>
        <p><b>Kategori:</b> {post.category}</p>
        <p><b>Tanggal:</b> {post.pusblised_at}</p>
      </div>

      <div className="share-box">
        <h4>🔗 Bagikan:</h4>
        <button>Facebook</button>
        <button>Twitter</button>
        <button>WhatsApp</button>
      </div>

    </div>
  )
}

export default Detail