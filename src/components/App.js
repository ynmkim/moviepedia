import ReviewList from './ReviewList'
import items from '../mock.json'
import { useState } from 'react'

function App() {
  const [order, setOrder] = useState('createdAt')
  const sortedItem = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt')
  const handleRatingClick = () => setOrder('rating')

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleRatingClick}>평점순</button>
      <ReviewList items={sortedItem} />
    </div>
  )
}

export default App
