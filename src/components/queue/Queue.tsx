import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MenuContext, MenuContextIF } from "../../Providers";
import { isDebug } from "../../util/debug/DebugEnv";
import { nextSongSkeleton, queueSkeleton } from "../../util/widgets/Skeletons";
import SearchBar from "../navigation/menuitems/SearchBar";

export default function Queue() {
    let { id } = useParams();

    const [queue, setQueue] = useState(undefined); //TODO: add type

    useEffect(() => {
        if (id === 'debug' && isDebug()) {
            setQueue(undefined);
        } else {
            //TODO: Service call
        }
    }, []);
    
    return <>
        <div className="min-h-screen mx-5 mt-7 flex flex-col w-full">
            <h1 className="text-2xl text-primary font-roboto mb-2">Nächster Song</h1>
            <div className="flex flex-col grow space-y-4 justify-start mb-4">
                {queue ?
                    <div>
                        {/*TODO: Queue cards*/}
                    </div>
                    : nextSongSkeleton()
                }
            </div>
            <h1 className="text-2xl text-primary font-roboto mb-2">Warteschlange</h1>
            <div className="flex flex-col grow space-y-4 justify-start">
                {queue ?
                    <div>
                        {/*TODO: Queue cards*/}
                    </div>
                    : queueSkeleton()
                }
            </div>
        </div>
    </>
}