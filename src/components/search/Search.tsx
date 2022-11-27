import React, { useContext, useEffect } from "react";
import { MenuContext, MenuContextIF, SearchContext, SearchContextIF } from "../../Providers";
import { resultsSkeleton } from "../../util/widgets/Skeletons";
import BackButton from "../navigation/menuitems/BackButton";

export default function Search(): JSX.Element {
    let menu: MenuContextIF = useContext(MenuContext);

    const search: SearchContextIF = useContext(SearchContext);

    useEffect(() => {
        menu.setLeft(<BackButton />)
    }, []);

    return <div className="min-h-full mx-5 mt-7 w-full">
                <h1 className="text-2xl text-primary font-roboto mb-2">Ergebnisse</h1>
                <div className="flex flex-col grow space-y-4 justify-start mb-4 w-full">
                    {search.result ?
                        <>
                            <p>{search.result[0].name}</p>
                        </> 
                        : resultsSkeleton()
                    }
                </div>
            </div>;
}