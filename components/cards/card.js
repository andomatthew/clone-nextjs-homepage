import Link from 'next/link'

import styles from './card.module.css'

export default function Card ({title, content}) {
    
    const { fontTitle } = styles
    
    return (
        <div className="card p-2">
            <div className="card-body">
                <h5 className={`${fontTitle} card-title`}>{title === undefined ? "Title Card" : title }</h5>
                <p className="card-text">{content === undefined ? " Content Card" : content }</p>
                <Link href="/">
                    <a className="card-link">Documentation &rarr;</a>
                </Link>
            </div>
      </div>
    )
}