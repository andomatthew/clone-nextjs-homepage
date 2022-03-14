import styles from './banner.module.css';

const { topBanner } = styles

export default function Banner () {
    return <div className={`${topBanner} bg-dark`} ></div>
}