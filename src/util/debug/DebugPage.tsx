import React, { useContext } from "react";
import { DeviceContext, DeviceContextIF, UserContext, UserContextIF } from "../../Providers";

export default function DebugPage() {
    const device: DeviceContextIF = useContext(DeviceContext);
    let user: UserContextIF = useContext(UserContext);

    return <div>
        <h1 className="font-bold">Device Debug</h1>
        <div>
            Device Type: {device.isIOS ? 'iOS' : 'Not iOS'}
        </div>
        <h1 className="mt-4 font-bold">User Debug</h1>
        <div>
            <p>Username: {user.username ? user.username : "Not logged in"}</p>
            <p>Token: {user.token ? user.token : "Not logged in"}</p>
        </div>
    </div>;
}