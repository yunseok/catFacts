const handler = (req, res) => {
    if (!res.status(200)) return
    res.status(200).json({
        status: 200,
        message: "OK"
    })
}

export default handler