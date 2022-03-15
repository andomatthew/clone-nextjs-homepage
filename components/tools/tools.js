import styles from './tools.module.css'

import Link from 'next/link'

import Card from '../cards/card'

export default function Tools() {

    const { paddingTop100, smallText, marginHeader, marginY40 } = styles

    const cardsContent = [
        { title: "Image Optimization",
          content: "<Image> and Automatic Image Optimization with instant builds."   
        },
        { title: "Internationalization",
          content: "Built-in Domain & Subdomain Routing and Automatic Language detection."   
        },
        { title: "Next.js Analytics",
          content: "A true lighthouse score based on real visitor data & page-by-page insights"   
        },
        { title: "Zero Config",
          content: "Automatic compilation and bundling. Optimized for production from the start."   
        },
        { title: "Hybrid: SSG and SSR",
          content: "Pre-render pages at build time (SSG) or request time (SSR) in a single project."   
        },
        { title: "Incremental Static Generation",
          content: "Add and update statically pre-rendered pages incrementally after build time."   
        },
        { title: "Typescript Support",
          content: "Automatic TypeScript configuration and compilation."   
        },
        { title: "Fast Refresh",
          content: "Fast, reliable live-editing experience, as proven at Facebook scale."   
        },
        { title: "File-system routing",
          content: "Every component in the `pages` directory becomes route."   
        },
        { title: "API Routes",
          content: "Optionally create API endpoints to provide backend functionality."   
        },
        { title: "Built-in CSS Support",
          content: "Create component-level styles with CSS modules. Built-in Sass support."   
        },
        { title: "Code-splitting and Bundling",
          content: "Optimized bundle splitting algorithm created by the Google Chrome team."   
        },
    ]

    return (
        <main className={`${paddingTop100} text-center`}>
            <div className={`${marginHeader}`}>
                <h2>The Web SDK</h2>
                <p className={`${smallText}`}>Next.js has all the tools you need to make the Web. Faster</p>
            </div>
                
            <div className='container'>
                <div className='row'>
                    {cardsContent.map((card, index) => (
                        <div className='col-4 mb-4' key={index}>
                            <Card title={card.title} content={card.content} />
                        </div>
                    ))}
                </div>
                <p className={`${marginY40}`}>
                    <b>And more: </b> Support for {' '} 
                    <Link href="/"><a className='link-primary'>environment variables, {' '}</a></Link>
                    <Link href="/"><a className='link-primary'>preview mode, {' '}</a></Link>
                    <Link href="/"><a className='link-primary'>custom <code>`head`</code> tags, {' '}</a></Link>
                    <Link href="/"><a className='link-primary'>automatic polyfills, {' '}</a></Link>
                    and more.
                </p>
            </div>
        </main>
    )
}