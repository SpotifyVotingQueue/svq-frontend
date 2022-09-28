export function playlistSkeleton(): JSX.Element {
    return <div className="grow flex flex-col justify-between">
                        <div className="flex h-0.45 justify-between">
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <div className="w-1/3 h-full rounded-lg bg-primaryDark animate-pulse"></div>
                                <div className="flex flex-col w-2/3 h-full">
                                    <div className="w-1/2 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-1/3 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-2/5 h-2 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                </div>
                            </div>
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <div className="w-1/3 h-full rounded-lg bg-primaryDark animate-pulse"></div>
                                <div className="flex flex-col w-2/3 h-full">
                                    <div className="w-1/2 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-1/3 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-2/5 h-2 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-0.45 justify-between">
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <div className="w-1/3 h-full rounded-lg bg-primaryDark animate-pulse"></div>
                                <div className="flex flex-col w-2/3 h-full">
                                    <div className="w-1/2 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-1/3 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-2/5 h-2 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                </div>
                            </div>
                            <div className="flex w-0.45 h-full bg-bgPlaylist rounded-lg">
                                <div className="w-1/3 h-full rounded-lg bg-primaryDark animate-pulse"></div>
                                <div className="flex flex-col w-2/3 h-full">
                                    <div className="w-1/2 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-1/3 h-3 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                    <div className="w-2/5 h-2 mt-2 ml-2 rounded bg-primaryDark animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
}

export function queueShortSkeleton(): JSX.Element {
    return          <div className="grow overflow-hidden flex justify-start space-x-4">
                        <div className="flex flex-col h-36 w-36">
                            <div className="h-32 w-32 m-auto rounded-2xl bg-primaryDark animate-pulse"></div>
                            <div className="h-3 mt-1.5 w-1/2 mx-auto rounded bg-primaryDark animate-pulse"></div> 
                        </div>
                        <div className="flex flex-col h-36 w-36">
                            <div className="h-32 w-32 m-auto rounded-2xl bg-primaryDark animate-pulse"></div>
                            <div className="h-3 mt-1.5 w-2/5 mx-auto rounded bg-primaryDark animate-pulse"></div> 
                        </div>
                        <div className="flex flex-col h-36 w-36">
                            <div className="h-32 w-32 m-auto rounded-2xl bg-primaryDark animate-pulse"></div>
                            <div className="h-3 mt-1.5 w-1/2 mx-auto rounded bg-primaryDark animate-pulse"></div> 
                        </div>
                    </div>
}