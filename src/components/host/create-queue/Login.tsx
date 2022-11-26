import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import logo from '../../../assets/media/logo.svg';
import spotify from '../../../assets/media/spotifyFull.svg';
import { MenuContext, MenuContextIF, SessionContext, SessionContextIF } from "../../../Providers";
import { isDebug } from "../../../util/debug/DebugEnv";
import ProfilePicture from "../../navigation/menuitems/ProfilePicture";

export default function Login(): JSX.Element {
    let [searchParams] = useSearchParams();
    let navigate = useNavigate();

    let session: SessionContextIF = useContext(SessionContext);

    let menu: MenuContextIF = useContext(MenuContext);

    const { pathname } = useLocation();
    useEffect(() => {
        let token = searchParams.get('token')
        if (token) {
            session.setToken(token);

            menu.setRight(<ProfilePicture />);

            navigate(`/${searchParams.get('redirect')}?token=${token}`);
        }
    }, []);

    function login(): void {
        // TODO:    menu.setRight(<ProfilePicture />);
        if (isDebug()) {
            navigate(`/${searchParams.get('redirect')}`);
            return;
        }
        window.location.href = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/login?redirect=${searchParams.get('redirect')}&session=${session.clientSession}`;
    }

    return <>
        <div className="absolute z-20 top-0 left-0 min-h-screen min-w-screen bg-backgroundLight flex flex-col justify-between">
            <div className="h-1/3 ml-6 mt-4">
                <h1 className="text-spotify text-8xl font-bold font-pulp-display">spotify</h1>
                <h1 className="text-spotify text-8xl font-bold font-pulp-display">login</h1>
            </div>
            <div>
                <div className="min-h-screen-15 ml-6 flex flex-col">
                    <img src={logo} alt="HipQueue" className="h-16 ml-auto mr-auto" />
                    <div className="ml-auto mr-auto flex">
                        <p className="text-primary inline text-center">Connected to </p>
                        <img src={spotify} alt="Spotify" className="h-6 inline ml-2 translate-y-0.5" />
                    </div>
                </div>
                <div className="min-h-screen-15 ml-6 mr-6">
                    <button className="bg-spotify text-primary text-xl rounded-full w-full h-16" onClick={() => login()}>
                        Log in with Spotify
                    </button>
                </div>
            </div>
        </div>
    </>;
}