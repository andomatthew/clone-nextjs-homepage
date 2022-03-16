import Link from 'next/link'

import styles from './card.module.css'

export default function Card ({title, content}) {
    
    const { fontTitle } = styles
    
    return (
        <div className="card p-2 h-100">
            <div className="card-body d-flex flex-wrap">
                <h5 className={`${fontTitle} card-title`}>{title === undefined ? "Title Card" : title }</h5>
                <p className="card-text">{content === undefined ? " Content Card" : content }</p>
                <Link href="/">
                    <a className="card-link">Documentation &rarr;</a>
                </Link>
            </div>
      </div>
    )
}