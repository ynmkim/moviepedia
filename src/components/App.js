import ReviewList from './ReviewList'
import { getReviews } from '../api'
import { useEffect, useState } from 'react'

const LIMIT = 6

function App() {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('createdAt')
  const [offset, setOffset] = useState(0)
  const [hasNext, setHasNext] = useState(false)
  const sortedItem = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt')
  const handleRatingClick = () => setOrder('rating')
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id) // true가 되는 요소만 모아서 새로운 배열을 리턴함.
    setItems(nextItems)
  }
  const handlLoad = async (options) => {
    const { reviews, paging } = await getReviews(options)
    if (offset === 0) {
      setItems(reviews)
    } else {
      setItems([...items, ...reviews])
    }
    setOffset(options.offset + options.limit)
    setHasNext(paging.hasNext)
  }

  const handleLoadMore = () => {
    handlLoad({ order, offset, limit: LIMIT })
  }

  useEffect(() => {
    handlLoad({ order, offset: 0, limit: LIMIT })
  }, [order])
 
  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleRatingClick}>평점순</button>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
      {hasNext && <button onClick={handleLoadMore}>더 보기</button>}
    </div>
  )
}

export default App
