import { useState } from 'react'

function FileInput() {
  const [value, setValue] = useState()
  const handleChange = (e) => {
    const nextValue = e.target.files[0]
    setValue(nextValue)
  }
  return <input type="file" onChange={handleChange} />
}

export default FileInput
