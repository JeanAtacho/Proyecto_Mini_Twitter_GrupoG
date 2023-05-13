import { apiURL } from "../config"

function HeaderOtherProfile({ user }) {
    return (<>
       <header className="headerProfile">
            {user.data && user.data.avatar != null && (<>
                <img
                    className="profile_pictureUserLogged"
                    src={`${apiURL}/uploads/${user.data.avatar}`}
                />
            </>)}
            {user.data && user.data.avatar === null && (<>
                <img
                    className="profile_pictureUserLogged"
                    src="/image/trini_purple.png"
                />
            </>)}
            {user && user.data && (
                <>
                    <h2 className="userTrini">{user.data.name}</h2>
                    <h3 className="nameTrini">{user.data.email}</h3>
                </>
            )}
        </header>
    </>
    );
}

export default HeaderOtherProfile;
