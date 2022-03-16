export default function Test() {
    return (
        <div>
            <h1 className="title">Hello world</h1>
            <style jsx>
                {
                    `
                    .title {
                        color: red;
                    }
                    @media screen and (min-width: 1000px): {
                        .title {
                            color: red;
                        }
                    }`
                }
            </style>
        </div>
    )
}