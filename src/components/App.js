import ReviewList from './ReviewList'
import items from '../mock.json'

function App() {
  return (
    <div>
      <ReviewList items={items} />
    </div>
  )
}

export default App
