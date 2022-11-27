import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { isDebug } from "../../util/debug/DebugEnv";
import { APIContext, APIContextIF, MenuContext, MenuContextIF, QueueInformationContext, QueueInformationIF, SessionContext, SessionContextIF, UserContext, UserContextIF } from "../../Providers";
import Playlists from "./playlists/Playlists";
import ShortQueue from "./queue-short/ShortQueue";
import Recomendations from "./recomendations/Recomendations";
import Player from "./player/Player";
import SearchBar from "../navigation/menuitems/SearchBar";
import { BurgerMenu } from "../navigation/menuitems/BurgerMenu";
import { useSearchParams } from "react-router-dom";
import { PartyCreatedDto, PlaylistDto } from "../../services-gen";

export default function Overview() {
    const { pathname } = useLocation();
    let navigate = useNavigate();
    let user: UserContextIF = useContext(UserContext);
    let [searchParams] = useSearchParams();

    let session: SessionContextIF = useContext(SessionContext);

    let queueInformation: QueueInformationIF = useContext(QueueInformationContext);

    let api: APIContextIF = useContext(APIContext);

    let menu: MenuContextIF = useContext(MenuContext);

    const [bTextID, setBTextID] = useState("Kopieren");
    const [bTextURL, setBTextURL] = useState("Kopieren");

    const [playlists, setPlaylists] = useState(undefined as PlaylistDto[] | undefined);
    const [queue, setQueue] = useState(undefined);
    const [recomendations, setRecomendations] = useState(undefined);
    const [currentSong, setCurrentSong] = useState(undefined as string | undefined); //TODO: add type

    const [searchQuery, setSearchQuery] = useState(undefined as string | undefined);


    const [qInfoOpen, setQInfoOpen] = useState(false);
    useEffect(() => {
        let debug = isDebug();
        let token = searchParams.get('token');
        if ((!session.token || !session.clientSession) && pathname === '/create' && !debug && !token) {
            navigate(`/login?redirect=create`);
            return;
        }
        if (!token) {
            token = session.token!;
        }
        let partyId: string = "";
        if (pathname === "/create") {
            partyId = createNewQueue(debug, token) as string;
        } else if (pathname.startsWith("/queue/")) {
            if (pathname.endsWith('debug')) {
                //Mock data for debug or load static data
                setCurrentSong("undefined");
            } else {
                //Load queue data from server
            }
            partyId = pathname.split("/")[2];
            queueInformation.setQueueId!(partyId);
        }
        api.playlists.getPlaylists({ partyId: partyId }).then((res: PlaylistDto[]) => {
            setPlaylists(res);
        });

        menu.setLeft(<BurgerMenu />)
        menu.setMiddle(<SearchBar />);
    }, []);

    function createNewQueue(debug: boolean, token: string): string | undefined {
        try {
            const res: PartyCreatedDto = await api.party.create({ accesscode: token })
            queueInformation.setQueueId!(res.joinCode);
            queueInformation.setJoinUrl!(process.env.REACT_APP_APPLICATION_BASE_URL + '/queue/' + res.joinCode);
            setQInfoOpen(true);
            return res.joinCode;
        }
        catch (err) {
            console.error(err);
            if (debug) {
                queueInformation.setQueueId!("debug");
                queueInformation.setJoinUrl!("https://hipqueue.de/join/debug");
                setQInfoOpen(true);
            }
            //TODO: Error handling
            return undefined;
        }
    }

    function switch2Queue() {
        setQInfoOpen(false);
        navigate(`/queue/${queueInformation.queueId}`);
    }

    function copyID(): void {
        navigator.clipboard.writeText(queueInformation.queueId!).then(() => {
            setBTextID("✔️ Kopiert!");
            setTimeout(() => {
                setBTextID("Kopieren");
            }, 1000);
        });
    }

    function copyURL(): void {
        navigator.clipboard.writeText(queueInformation.joinUrl!).then(() => {
            setBTextURL("✔️ Kopiert!");
            setTimeout(() => {
                setBTextURL("Kopieren");
            }, 1000);
        });
    }

    return <>
        <div className="flex flex-col min-w-screen mb-4">
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
                                <input type="text" value={queueInformation.queueId} readOnly className="w-0.3 rounded-sm text-center text-primary font-bold text-lg bg-backgroundLight" />
                                <button className="w-0.3 text-primary text-sm font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => copyID()}>{bTextID}</button>
                            </div>
                            <div className="flex mr-4 ml-4 mt-3 justify-between">
                                <p className="text-primary font-roboto w-0.3">Link:</p>
                                <input type="url" value={queueInformation.joinUrl} readOnly className="w-0.3 pl-1 pr-1 rounded-sm text-center text-lg text-primary bg-backgroundLight"/>
                                <button className="w-0.3 text-primary text-sm  font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => copyURL()}>{bTextURL}</button>
                            </div>
                            <div className="flex mr-4 ml-4 mt-6 mb-4">
                                <button className="w-full text-center text-2xl text-primary font-roboto border-2 border-backgroundDark rounded-2xl bg-primaryDark pl-2 pr-2" onClick={() => switch2Queue()}>Weiter</button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
            <Playlists playlists={playlists} />
            <ShortQueue queue={queue} />
            <Recomendations recomendations={recomendations} />
        </div>
        <Player currentSong={currentSong} />
    </>;
}