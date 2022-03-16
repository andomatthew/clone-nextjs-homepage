import Link from 'next/link'

import styles from './hero.module.css' 
import {
    ButtonPrimaryCustom2,
    ButtonWhiteCustom
} from '../buttons'

export default function Hero() {
    
    const { paddingTop120, margin30, margin40 } = styles 
    
    return (
        <main className={`${paddingTop120} text-center`}>
            <h1 className={`${margin30} title`}>The React Framework for Production</h1>
            <h3 className={`${margin40} description`}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, Typescript support, smart bundling route pre-fetching, and more. No config needed.</h3>
            <div className={`${margin30}`}>
                <ButtonPrimaryCustom2 text={"Start Learning"} />
                <ButtonWhiteCustom text={"Documentation"} />
            </div>
            <div className={`${margin30}`}>
                <span className='px-2 fw-light'>License: MIT</span>
                <Link href="/">
                    <a className='link-primary-custom px-2'>Github</a>
                </Link>
            </div>
        </main>
    )
}