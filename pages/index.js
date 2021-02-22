const Home = ({ release }) => {
    return <div>{release}</div>
}

Home.getInitialProps = async ({ query }) => {
    const res = await fetch(`https://api.discogs.com/releases/${query.id}`)
    const release = await res.json()
    
    for (let i = 0; i < release.artists.length; i++) {
        const r = await fetch(release.artists[i].resource_url)
        release.artists[i].detail = await r.json()
    }

    return { release }
}

export default Home