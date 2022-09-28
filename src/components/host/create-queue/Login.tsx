import React from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import logo from '../../../assets/media/logo.svg';
import spotify from '../../../assets/media/spotifyFull.svg';
import { isDebug } from "../../../util/debug/DebugEnv";
import { userMe } from "../../../util/services/ServiceMethods";

export default function Login(): JSX.Element {
    let [searchParams] = useSearchParams();
    let navigate = useNavigate();

    function login(): void {
        const loginFunc = userMe();
        loginFunc({}).then((res) => {
            console.log(res.data);
            navigate(`/${searchParams.get('redirect')}`);
        }).catch(() => {
            console.log("Login failed");
            if (isDebug()) {
                navigate(`/${searchParams.get('redirect')}`);
            }
        });
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