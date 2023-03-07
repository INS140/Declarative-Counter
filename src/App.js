import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleCountIncrease = () => {
    count !== '' && count < 998
      ? setCount(count + 1)
      : setCount(1)
  }

  const handleCountReset = () => setCount(0)

  const handleCountDecrease = () => setCount(count - 1)

  const handleCountManual = (e) => {
    Number(e.target.value)
      ? setCount(Number(e.target.value))
      : e.target.value === '' 
      ? setCount('')
      : setCount(0)
  }

  return <>
      <div className='count-container flex-row'>
        <input
          type='text'
          value={count}
          onChange={handleCountManual}
          maxLength='3'
        />
      </div>
      <div className='btn-container flex-row'>
        <button
        className='sub'
          onClick={handleCountDecrease}
          disabled={count === 0 || count === ''}
        >-</button>
        <button onClick={handleCountReset}>RESET</button>
        <button
          className='add'
          onClick={handleCountIncrease}
        >+</button>
      </div>
    </>
}

export default App;
