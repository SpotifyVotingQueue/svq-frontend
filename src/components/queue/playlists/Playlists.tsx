import React from "react";
import { PlaylistDto } from "../../../services-gen";
import { playlistSkeleton } from "../../../util/widgets/Skeletons";

export interface PlaylistsProps {
  playlists: PlaylistDto[] | undefined;
}

export default function Playlists(props: PlaylistsProps) {


    return <div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
                <h1 className="text-2xl text-primary font-roboto mb-2">Deine Playlists</h1>
                {props.playlists ? 
                    <div className="grow flex flex-col justify-between">
                        <div className="flex h-0.45 justify-between">
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <img className="w-1/3 h-full rounded-lg" src={props.playlists[0].cover?.href} alt="Cover"></img>
                                <div className="flex flex-col w-2/3 h-full">
                                    <p className="w-1/2 h-3 mt-2 ml-2 font-bold">{props.playlists[0].name}</p>
                                    <p className="w-1/3 h-3 mt-2 ml-2">{props.playlists[0].numberTracks} Tracks</p>
                                    <p className="w-2/5 h-2 mt-2 ml-2">By {props.playlists[0].owner}</p>
                                </div>
                            </div>
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <img className="w-1/3 h-full rounded-lg" src={props.playlists[1].cover?.href} alt="Cover"></img>
                                <div className="flex flex-col w-2/3 h-full">
                                    <p className="w-1/2 h-3 mt-2 ml-2 font-bold">{props.playlists[1].name}</p>
                                    <p className="w-1/3 h-3 mt-2 ml-2">{props.playlists[1].numberTracks} Tracks</p>
                                    <p className="w-2/5 h-2 mt-2 ml-2">By {props.playlists[1].owner}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-0.45 justify-between">
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <img className="w-1/3 h-full rounded-lg" src={props.playlists[2].cover?.href} alt="Cover"></img>
                                <div className="flex flex-col w-2/3 h-full">
                                    <p className="w-1/2 h-3 mt-2 ml-2 font-bold">{props.playlists[2].name}</p>
                                    <p className="w-1/3 h-3 mt-2 ml-2">{props.playlists[2].numberTracks} Tracks</p>
                                    <p className="w-2/5 h-2 mt-2 ml-2">By {props.playlists[2].owner}</p>
                                </div>
                            </div>
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <img className="w-1/3 h-full rounded-lg" src={props.playlists[3].cover?.href} alt="Cover"></img>
                                <div className="flex flex-col w-2/3 h-full">
                                    <p className="w-1/2 h-3 mt-2 ml-2 font-bold">{props.playlists[3].name}</p>
                                    <p className="w-1/3 h-3 mt-2 ml-2">{props.playlists[3].numberTracks} Tracks</p>
                                    <p className="w-2/5 h-2 mt-2 ml-2">By {props.playlists[3].owner}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : playlistSkeleton()
                }
            </div>
}