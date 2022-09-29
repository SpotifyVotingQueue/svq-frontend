import React, { useEffect, useState } from "react";
import { isDebug } from "../../../util/debug/DebugEnv";
import { songSkeleton } from "../../../util/widgets/Skeletons";

export interface PlayerProps {
  currentSong: any; //TODO: add type
}

export default function Player(props: PlayerProps) {
    const [songProgress, setSongProgress] = useState(0);

    useEffect(() => {
        if (isDebug()) {
            mockProgress();
        }
    }, [props.currentSong]);

    async function mockProgress() {
        let i = 0;
        while (i < 100) {
            await new Promise(r => setTimeout(r, 100));
            setSongProgress(i);
            i = i + 0.05;
        }
    }
    
    return <div className="fixed bottom-0 left-0 z-10 w-full h-1/6 rounded-t-lg bg-secondary shadow-xl">
            <div className="mt-8 mx-5 h-3 rounded-full bg-primaryDark">
                <div className="h-3 rounded-full bg-primary" style={{width: `${songProgress}%`}}></div>
            </div>
            {undefined ?
                <div>
                    {/*TODO: Song info*/}
                </div>
                : songSkeleton()
            }
        </div>
}