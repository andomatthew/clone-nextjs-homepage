import Link from 'next/link'

export default function Card ({title, content}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title === undefined ? "Title Card" : title }</h5>
                <p className="card-text">{content === undefined ? " Content Card" : content }</p>
                <Link href="/">
                    <a className="card-link">Documentation &rarr;</a>
                </Link>
            </div>
      </div>
    )
}