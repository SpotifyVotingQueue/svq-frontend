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

export function recommendationsSkeleton(): JSX.Element {
    return <>
                        <div className="h-14 flex">
                            <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                            <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                                <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                                <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                            </div>
                            <button className="h-14 w-14 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-14 flex">
                            <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                            <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                                <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                                <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                            </div>
                            <button className="h-14 w-14 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-14 flex">
                            <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                            <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                                <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                                <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                            </div>
                            <button className="h-14 w-14 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-14 flex">
                            <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                            <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                                <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                                <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                            </div>
                            <button className="h-14 w-14 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-14 flex">
                            <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                            <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                                <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                                <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                            </div>
                            <button className="h-14 w-14 ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </>
}

export function songSkeleton(): JSX.Element {
    return <div className="h-15 flex mt-5 mx-5">
                    <div className="h-14 w-14 rounded-lg bg-primaryDark animate-pulse"></div>
                    <div className="h-14 w-40 ml-4 flex flex-col justify-center space-y-2.5">
                        <div className="h-4 w-32 rounded bg-primaryDark animate-pulse"></div>
                        <div className="h-2 w-24 rounded bg-primaryDark animate-pulse"></div>
                    </div>
                </div>
}