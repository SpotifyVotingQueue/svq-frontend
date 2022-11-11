import React, { useContext } from "react";
import { DeviceContext, DeviceContextIF, SessionContext, SessionContextIF, UserContext, UserContextIF } from "../../Providers";

export default function DebugPage() {
    const device: DeviceContextIF = useContext(DeviceContext);
    let user: UserContextIF = useContext(UserContext);
    let session: SessionContextIF = useContext(SessionContext);

    return <div>
        <h1 className="font-bold">Device Debug</h1>
        <div>
            Device Type: {device.isIOS ? 'iOS' : 'Not iOS'}
        </div>
        <h1 className="mt-4 font-bold">User Debug</h1>
        <div>
            <p>Username: {user.username ? user.username : "Not logged in"}</p>
        </div>
        <h1 className="mt-4 font-bold">Session Debug</h1>
        <div>
            <p>Token: {session.token ? session.token : "Not logged in"}</p>
        </div>
    </div>;
}