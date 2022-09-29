import React, { useState } from "react";
import { queueSkeleton } from "../../util/widgets/Skeletons";

export default function Queue() {
    const [queue, setQueue] = useState(undefined); //TODO: add type
    
    return <>
        <div className="min-h-screen mx-5 mt-7 flex flex-col w-full">
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