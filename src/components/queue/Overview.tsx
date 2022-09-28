import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { createQueue } from "../../util/services/ServiceMethods";
import { components } from "../../services-gen/svq-backend";
import { isDebug } from "../../util/debug/DebugEnv";
import { UserContext, UserContextIF } from "../../Providers";
import { playlistSkeleton, queueShortSkeleton } from "../../util/widgets/Skeletons";

export default function Overview() {
    const { pathname } = useLocation();
    let navigate = useNavigate();
    const { id } = useParams();
    let user: UserContextIF = useContext(UserContext);

    const [queueID, setQueueID] = useState(undefined as string | undefined);
    const [joinURL, setJoinURL] = useState(undefined as string | undefined);

    const [bTextID, setBTextID] = useState("Kopieren");
    const [bTextURL, setBTextURL] = useState("Kopieren");

    const [playlists, setPlaylists] = useState(undefined);

    const [qInfoOpen, setQInfoOpen] = useState(false);
    useEffect(() => {
        let debug = isDebug();
        if ((!user.username || !user.token) && pathname === '/create' && !debug) {
            navigate(`/login?redirect=create`);
        }

        if (pathname === "/create") {
            //Service call to create queue
            createNewQueue(debug)
        } else if (pathname.startsWith("/queue/")) {
            if (pathname.endsWith('debug')) {
                //Mock data for debug or load static data
            } else {
                //Load queue data from server
            }
        }
    }, []);

    function createNewQueue(debug: boolean): void {
            let createFunc = createQueue();
            type PartyCreatedDto = components["schemas"]["PartyCreatedDto"];
            createFunc({}).then((res) => {
                let data = res.data as PartyCreatedDto;
                setQueueID(data.joinCode);
                setJoinURL(process.env.REACT_APP_APPLICATION_BASE_URL + '/queue/' + data.joinCode);
                setQInfoOpen(true);
            }).catch((err) => {
                console.log(err);
                if (debug) {
                    setQueueID("debug");
                    setJoinURL("https://hipqueue.de/join/debug");
                    setQInfoOpen(true);
                }
                //TODO: Error handling
            });
    }

    function switch2Queue() {
        setQInfoOpen(false);
        navigate(`/queue/${queueID}`);
    }

    function copyID(): void {
        navigator.clipboard.writeText(queueID!).then(() => {
            setBTextID("✔️ Kopiert!");
            setTimeout(() => {
                setBTextID("Kopieren");
            }, 1000);
        });
    }

    function copyURL(): void {
        navigator.clipboard.writeText(joinURL!).then(() => {
            setBTextURL("✔️ Kopiert!");
            setTimeout(() => {
                setBTextURL("Kopieren");
            }, 1000);
        });
    }

    function nav2Vote(): void {

    }

    return <>
        <div className="flex flex-col min-w-screen">
            <Transition appear show={qInfoOpen} as={Fragment}>
                <Dialog onClose={() => switch2Queue()} className="fixed top-0 left-0 z-20 bg-backgroundDark bg-opacity-90 min-h-screen min-w-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="fixed top-1/3 left-0 ml-6 mr-6 mt-auto mb-auto rounded-2xl bg-secondary shadow-xl align-middle z-30">
                            <Dialog.Title className="text-center text-primary font-roboto text-lg mt-4 font-bold">Teile die HipQueue</Dialog.Title>
                            <Dialog.Description className="text-primaryDark font-roboto mr-4 ml-4 mt-4 text-center">Du kannst deine Gäste entweder per Beitritts-Code oder Link einladen</Dialog.Description>
                            <div className="flex mr-4 ml-4 mt-4 justify-between">
                                <p className="text-primary font-roboto w-0.3">Beitrittscode:</p>
                                <input type="text" value={queueID} readOnly className="w-0.3 rounded-sm text-center text-primary font-bold text-lg bg-backgroundLight" />
                                <button className="w-0.3 text-primary text-sm font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => copyID()}>{bTextID}</button>
                            </div>
                            <div className="flex mr-4 ml-4 mt-3 justify-between">
                                <p className="text-primary font-roboto w-0.3">Link:</p>
                                <input type="url" value={joinURL} readOnly className="w-0.3 pl-1 pr-1 rounded-sm text-center text-lg text-primary bg-backgroundLight"/>
                                <button className="w-0.3 text-primary text-sm  font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => copyURL()}>{bTextURL}</button>
                            </div>
                            <div className="flex mr-4 ml-4 mt-6 mb-4">
                                <button className="w-full text-center text-2xl text-primary font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => switch2Queue()}>Weiter</button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
            <div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
                <h1 className="text-2xl text-primary font-roboto mb-2">Deine Playlists</h1>
                {playlists ? 
                    <div>
                        {/*TODO: Playlist cards*/}
                    </div>
                    : playlistSkeleton()
                }
            </div>
            <div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
                <div className="flex w-full justify-between mb-3">
                    <h1 className="text-2xl text-primary font-roboto">Warteschlange</h1>
                    <button className="text-primary text-lg font-roboto rounded-full bg-secondary px-4" onClick={() => nav2Vote()}>Abstimmen</button>
                </div>
                {undefined ?
                    <div>
                        {/*TODO: Queue cards*/}
                    </div>
                    : queueShortSkeleton()
                }
            </div>
        </div>
    </>;
}