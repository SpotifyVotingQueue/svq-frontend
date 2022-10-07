import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MenuContext, MenuContextIF } from "../../Providers";
import { isDebug } from "../../util/debug/DebugEnv";
import { resultsSkeleton } from "../../util/widgets/Skeletons";
import BackButton from "../navigation/menuitems/BackButton";

export default function Search(): JSX.Element {
    let { id } = useParams<{ id: string }>();

    let menu: MenuContextIF = useContext(MenuContext);

    const [searchResult, setSearchResult] = useState(undefined); //TODO add type

    useEffect(() => {
        if (id === 'debug' && isDebug()) {
            setSearchResult(undefined);
        } else {
            //TODO api call
        }

        menu.setLeft(<BackButton />)
    }, []);

    return <div className="min-h-full mx-5 mt-7 w-full">
                <h1 className="text-2xl text-primary font-roboto mb-2">Ergebnisse</h1>
                <div className="flex flex-col grow space-y-4 justify-start mb-4 w-full">
                    {searchResult ?
                        <>
                            {/* TODO search result cards */}
                        </> 
                        : resultsSkeleton()
                    }
                </div>
            </div>;
}