import React from "react";
import { playlistSkeleton } from "../../../util/widgets/Skeletons";

export interface PlaylistsProps {
  playlists: any; //TODO: add type
}

export default function Playlists(props: PlaylistsProps) {


    return <div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
                <h1 className="text-2xl text-primary font-roboto mb-2">Deine Playlists</h1>
                {props.playlists ? 
                    <div>
                        {/*TODO: Playlist cards*/}
                    </div>
                    : playlistSkeleton()
                }
            </div>
}