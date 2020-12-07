import React from 'react'
import styles from './Container.module.scss'

export default function SecondaryContainer() {
    return (
        <div className={`btn btn-secondary ${styles.secondary}`}>
            Secondary Container
        </div>
    )
}
