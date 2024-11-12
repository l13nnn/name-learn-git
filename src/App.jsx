import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(false);
  const toggleNameVisibility = () => {
    setVisible(!visible);
  }

  return (
    <>
      <div className="button">
        <button onClick={toggleNameVisibility}>
          {visible ? 'Sembunyikan' : 'Tampilkan'}
        </button>
        {visible && <p>Nama: Irene Djaya</p>}
      </div>
    </>
  )
}

export default App
