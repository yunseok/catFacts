function Home({ fact }) {
    return <div>{fact[0]}</div>
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/facts")
    const fact = await res.json()

    return {
        props: {
            fact
        }
    }
}

export default Home