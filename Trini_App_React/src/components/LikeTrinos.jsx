function LikeTrinos() {

    const likeTweetHandler = async (id) => {
    const response = await post({ url: `/tweet/${id}` })
        return <>
            <header className="header">
                <h1>¡Sal de tu nido y comienza a trinar!</h1>
            </header>

        </>
    }
}

    export default LikeTrinos