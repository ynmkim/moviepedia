import ReviewList from './ReviewList'
import { getReviews } from '../api'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('createdAt')
  const sortedItem = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt')
  const handleRatingClick = () => setOrder('rating')
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id) // true가 되는 요소만 모아서 새로운 배열을 리턴함.
    setItems(nextItems)
  }
  const handlLoad = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery)
    setItems(reviews)
  }

  useEffect(() => { 
    handlLoad(order)
  }, [order])

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleRatingClick}>평점순</button>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
    </div>
  )
}

export default App
