import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { queueShortSkeleton } from "../../../util/widgets/Skeletons";
import { APIContext, APIContextIF } from "../../../Providers";
import { TrackDto } from "../../../services-gen";
import { useInterval } from "usehooks-ts";

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

	useInterval(() => {
		async function getQueue() {
			let queue: TrackDto[] = await api.party.getQueue({
				id: props.partyId,
			});
			setQueue(queue);
		}
		getQueue();
	}, refreshInterval);

	useEffect(() => {
		setRefreshInterval(1000);
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
						<div className="flex flex-col h-36 w-36">
							<img
								className="h-32 w-32 m-auto rounded-2xl"
								src={track.coverUrl}
								alt="Cover"
							></img>
							<p className="w-1/2 h-3 mx-auto mt-1.5 font-bold text-sm">
								{track.name}
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
