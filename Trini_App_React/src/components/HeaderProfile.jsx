function HeaderProfile({ user }) {
    return (
        <header className="headerProfile">
            <img
                className="profile_pictureUserLogged"
                src="src/image/trini_purple.png"
                alt=""
            />
            {user && user.data && (
                <>
                    <h2 className="userTrini">{user.data.email}</h2>
                    <h3 className="nameTrini">{user.data.email}</h3>
                </>
            )}
        </header>
    );
}

export default HeaderProfile;
