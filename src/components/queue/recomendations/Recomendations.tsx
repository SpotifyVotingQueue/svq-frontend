import React, { useContext, useEffect, useState } from "react";
import { recommendationsSkeleton } from "../../../util/widgets/Skeletons";
import { AddTrackResponseDto, TrackDto } from "../../../services-gen";
import { APIContext, APIContextIF } from "../../../Providers";

export interface RecomendationsProps {
	partyId: string;
}

export default function Recomendations(props: RecomendationsProps) {
	const [recomendations, setRecomendations] = useState(
		undefined as TrackDto[] | undefined
	);
	const [rows, setRows] = useState([] as JSX.Element[]);

	const api: APIContextIF = useContext(APIContext);

	useEffect(() => {
		async function getRecomendations() {
			let recomendations: TrackDto[] = await api.track.getRecommendations(
				{
					partyId: props.partyId,
				}
			);
			setRecomendations(recomendations);
		}
		getRecomendations();
	}, [props.partyId]);

	useEffect(() => {
		if (recomendations) {
			setRows([]);
			recomendations.forEach((track) => {
				setRows((rows) => [
					...rows,
					<div className="flex w-full justify-between h-14 space-x-3">
						<img
							src={track.coverUrl}
							alt="Cover"
							className="grow-0 h-14 w-14 rounded-lg"
						></img>
						<div className="grow flex flex-col space-y-2.5 justify-center">
							<p className="w-full h-4 font-bold">
								{track.name!.length > 29
									? track.name?.slice(0, 27).concat("...")
									: track.name}
							</p>
							<p className="h-2 w-full rounded text-sm">
								{track.artists?.join(", ")}
							</p>
						</div>
						<button
							onClick={() => addToQueue(track)}
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
			});
		}
	}, [recomendations]);

	function addToQueue(track: TrackDto) {
		api.party
			.addTrackToQueue({ id: props.partyId, trackId: track.id! })
			.then((res: AddTrackResponseDto) => {
				if (res.newTrackAdded) {
					//todo do something
				}
			});
	}

	return (
		<div className="h-fit mx-5 mt-7 flex flex-col justify-start space-y-3">
			<h1 className="text-2xl text-primary font-roboto">Vorschläge</h1>
			{recomendations ? <>{rows}</> : recommendationsSkeleton()}
		</div>
	);
}
