import styles from './hero.module.css' 

export default function Hero() {
    
    const { fontSize100, fontSize20, paddingTop120, margin30 } = styles 
    
    return (
        <main className={`${paddingTop120} text-center`}>
            <h1 className={`${fontSize100} ${margin30}`}>The React Framework for Production</h1>
            <h3 className={fontSize20}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, Typescript support, smart bundling route pre-fetching, and more. No config needed.</h3>
        </main>
    )
}