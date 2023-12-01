import { useState } from 'react'

function ReviewForm() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeRating = (e) => {
    const nextRating = Number(e.target.value) || 0
    setRating(nextRating)
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  return (
    <form>
      <input value={title} onChange={handleChangeTitle} />
      <input type="number" value={rating} onChange={handleChangeRating} />
      <textarea value={content} onChange={handleChangeContent} />
    </form>
  )
}

export default ReviewForm
