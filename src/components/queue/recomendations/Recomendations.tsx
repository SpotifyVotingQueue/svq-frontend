import React from "react";
import { recommendationsSkeleton } from "../../../util/widgets/Skeletons";

export interface RecomendationsProps {
  recomendations: any; //TODO: add type
}

export default function Recomendations(props: RecomendationsProps) {

    return <div className="h-fit mx-5 mt-7 flex flex-col justify-start space-y-3">
                    <h1 className="text-2xl text-primary font-roboto">Vorschläge</h1>
                {props.recomendations ?
                    <div>
                        {/*TODO: Queue cards*/}
                    </div>
                    : recommendationsSkeleton()
                }
            </div>
}