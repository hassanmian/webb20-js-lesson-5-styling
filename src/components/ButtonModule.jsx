import React from 'react'
import styles from '../styles/button.module.css'

export default function ButtonModule() {
  console.log(styles)
  return (
    <button className={styles.btn}>
      Button Module
    </button>
  )
}
