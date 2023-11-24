import './ReviewList.css'

function formateDate(value) {
  const date = new Date(value)
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
}

function ReviewListItem({ item }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.tile}</h1>
        <p>{item.rating}</p>
        <p>{formateDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item, key) => {
        return (
          <li key={key}>
            <ReviewListItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default ReviewList
