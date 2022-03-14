import styles from './notification.module.css'

export default function Notification() {

    const { notificationWrapper, fontSize14, fontSize12 } = styles

    return (
        <div className={`${notificationWrapper} border border-2 rounded mx-auto p-2`}>
            <span className={`${fontSize14} badge bg-primary mr-1`}>New</span>
            <p className={`${fontSize14} m-2 d-inline`}>
                <b>Next.js 12.1:</b>Including on-demand ISR, support for styled-components and Relay, and our first developer survey &rarr; 
            </p>
        </div>
    )
}