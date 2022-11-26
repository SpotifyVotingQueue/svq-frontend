import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { APIContext, APIContextIF, MenuContext, MenuContextIF, SearchContext, SearchContextIF } from "../../Providers";
import { TrackDto } from "../../services-gen";
import { isDebug } from "../../util/debug/DebugEnv";
import { resultsSkeleton } from "../../util/widgets/Skeletons";
import BackButton from "../navigation/menuitems/BackButton";

export default function Search(): JSX.Element {
    let { id } = useParams<{ id: string }>();

    let menu: MenuContextIF = useContext(MenuContext);
    const api: APIContextIF = useContext(APIContext);

    const search: SearchContextIF = useContext(SearchContext);

    const [searchResult, setSearchResult] = useState(undefined as TrackDto[] | undefined); //TODO add type

    useEffect(() => {
        if (id === 'debug' && isDebug()) {
            setSearchResult(undefined);
        } else {
            api.track.searchTracks({ query: "", partyId: id as string }).then((result: TrackDto[]) => {
                setSearchResult(result);
            });
        }

        menu.setLeft(<BackButton />)
    }, []);

    useEffect(() => {
        if (search.searchQuery) {
            api.track.searchTracks({ query: search.searchQuery, partyId: id as string }).then((res: TrackDto[]) => {
                setSearchResult(res);
            });
        }
    }, [search.searchQuery]);

    return <div className="min-h-full mx-5 mt-7 w-full">
                <h1 className="text-2xl text-primary font-roboto mb-2">Ergebnisse</h1>
                <div className="flex flex-col grow space-y-4 justify-start mb-4 w-full">
                    {searchResult ?
                        <>
                            <p>{searchResult[0].name}</p>
                        </> 
                        : resultsSkeleton()
                    }
                </div>
            </div>;
}