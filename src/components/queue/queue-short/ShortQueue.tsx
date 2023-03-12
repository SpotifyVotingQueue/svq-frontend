import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { queueShortSkeleton } from "../../../util/widgets/Skeletons";
import { APIContext, APIContextIF } from "../../../Providers";
import { TrackDto } from "../../../services-gen";
import { useInterval } from "usehooks-ts";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export interface ShortQueueProps {
	partyId: string;
}

export default function ShortQueue(props: ShortQueueProps) {
	const { pathname } = useLocation();
	let navigate = useNavigate();

	const api: APIContextIF = useContext(APIContext);

	const [queue, setQueue] = useState(undefined as TrackDto[] | undefined);
	const [refreshInterval, setRefreshInterval] = useState(
		null as number | null
	);

	// useInterval(() => {
	// 	async function getQueue() {
	// 		let queue: TrackDto[] = await api.party.getQueue({
	// 			id: props.partyId,
	// 		});
	// 		setQueue(queue);
	// 	}
	// 	getQueue();
	// }, refreshInterval);

	// useEffect(() => {
	// 	setRefreshInterval(1000);
	// }, [props.partyId]);
	useEffect(() => {
		let sock = new SockJS(
			process.env.REACT_APP_BACKEND_BASE_URL + "/gs-guide-websocket"
		);
		let client = Stomp.over(sock);
		client.connect({}, function (frame) {
			client.subscribe("/sockets/state", (state) => {
				async function getQueue() {
					let queue: TrackDto[] = await api.party.getQueue({
						id: props.partyId,
					});
					setQueue(queue);
				}
				getQueue();
			});
		});
	}, [props.partyId]);

	function nav2Vote(): void {
		navigate(`${pathname}/vote`);
	}

	return (
		<div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
			<div className="flex w-full justify-between mb-3">
				<h1 className="text-2xl text-primary font-roboto">
					Warteschlange
				</h1>
				<button
					className="text-primary text-lg font-roboto rounded-full bg-secondary px-4"
					onClick={() => nav2Vote()}
				>
					Abstimmen
				</button>
			</div>
			{queue && queue.length > 0 ? (
				<div className="grow overflow-hidden flex justify-start space-x-4">
					{queue.map((track) => (
						<div className="flex flex-col h-42 w-36">
							<img
								className="min-h-32 min-w-32 mx-auto rounded-2xl"
								src={track.coverUrl}
								alt="Cover"
							></img>
							<p className="w-full h-5 mx-auto px-3 mt-0.5 font-bold text-sm text-center">
								{track.name!.length > 19
									? track.name?.slice(0, 18) + "..."
									: track.name}
							</p>
						</div>
					))}
				</div>
			) : (
				queueShortSkeleton()
			)}
		</div>
	);
}
