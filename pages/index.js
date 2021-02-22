function Home({ fact }) {
    return (
        <div>
            {fact.data[0]}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://meowfacts.herokuapp.com/")
    const fact = await res.json()

    return {
        props: {
            fact
        }
    }
}

export default Home