import React from "react";
import { queueShortSkeleton } from "../../../util/widgets/Skeletons";

export interface ShortQueueProps {
  queue: any; //TODO: add type
}

export default function ShortQueue(props: ShortQueueProps) {

    function nav2Vote(): void {

    }

    return <div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
                <div className="flex w-full justify-between mb-3">
                    <h1 className="text-2xl text-primary font-roboto">Warteschlange</h1>
                    <button className="text-primary text-lg font-roboto rounded-full bg-secondary px-4" onClick={() => nav2Vote()}>Abstimmen</button>
                </div>
                {props.queue ?
                    <div>
                        {/*TODO: Queue cards*/}
                    </div>
                    : queueShortSkeleton()
                }
            </div>
}