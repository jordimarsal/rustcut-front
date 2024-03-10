import React, { useState } from 'react'
import styles from '../styles/firstCardIndex.module.css'

const CardComponent: React.FC = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value)
  }

  const handleButtonClick = (): void => {
    // Aquí pots afegir la lògica per a retallar la URL
    setShortUrl(url.slice(0, 10))
  }

  return (
    <div className={styles.card}>
      <input
        type='text'
        value={url}
        onChange={handleInputChange}
        className={styles.input}
        placeholder='Enter URL'
      />
      <button onClick={handleButtonClick} className={styles.button}>
        Retallar URL
      </button>
      {shortUrl !== '' && <p className={styles.url}>{shortUrl}</p>}
    </div>
  )
}

export default CardComponent
