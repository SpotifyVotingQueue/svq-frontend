import React, { useContext } from "react";
import { DeviceContext } from "../../Providers";

export default function DeviceDebug() {
    const device = useContext(DeviceContext);

    return <div>
        <h1>Device Debug</h1>
        <div>
            Device Type: {device.isIOS ? 'iOS' : 'Not iOS'}
        </div>
    </div>;
}