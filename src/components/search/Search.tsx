import React, { useContext, useEffect, useState } from "react";
import {
	APIContext,
	APIContextIF,
	MenuContext,
	MenuContextIF,
	SearchContext,
	SearchContextIF,
	QueueInformationIF,
	QueueInformationContext,
} from "../../Providers";
import { AddTrackResponseDto, TrackDto } from "../../services-gen";
import { resultsSkeleton } from "../../util/widgets/Skeletons";
import BackButton from "../navigation/menuitems/BackButton";

export default function Search(): JSX.Element {
	let menu: MenuContextIF = useContext(MenuContext);

	const search: SearchContextIF = useContext(SearchContext);
	const api: APIContextIF = useContext(APIContext);
	const queue: QueueInformationIF = useContext(QueueInformationContext);

	const [rows, setRows] = useState(Array<JSX.Element>());

	useEffect(() => {
		menu.setLeft(<BackButton />);
	}, []);

	function addToQueue(track: TrackDto) {
		api.party
			.addTrackToQueue({ id: queue.queueId!, trackId: track.id! })
			.then((res: AddTrackResponseDto) => {
				if (res.newTrackAdded) {
					//todo do something
				}
			});
	}

	useEffect(() => {
		setRows([]);
		if (search.result === undefined) {
			return;
		}
		for (const result of search.result!) {
			setRows((rows) => [
				...rows,
				<div className="flex w-full justify-between h-14 space-x-3">
					<img
						src={result.coverUrl}
						alt="Cover"
						className="grow-0 h-14 w-14 rounded-lg"
					></img>
					<div className="grow flex flex-col space-y-2.5 justify-center">
						<p className="w-full h-4 font-bold">
							{result.name!.length > 29
								? result.name?.slice(0, 27).concat("...")
								: result.name}
						</p>
						<p className="h-2 w-full rounded text-sm">
							{result.artists?.join(", ")}
						</p>
					</div>
					<button
						onClick={() => addToQueue(result)}
						className="h-14 w-14 flex grow-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-14 h-14"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</button>
				</div>,
			]);
		}
	}, [search.result]);

	return (
		<div className="min-h-full mx-5 mt-7 w-full">
			<h1 className="text-2xl text-primary font-roboto mb-2">
				Ergebnisse
			</h1>
			<div className="flex flex-col grow space-y-4 justify-start mb-4 w-full">
				{search.result ? <>{rows}</> : resultsSkeleton()}
			</div>
		</div>
	);
}
