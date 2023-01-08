import React, { useContext, useEffect, useState } from "react";
import { isDebug } from "../../util/debug/DebugEnv";
import { nextSongSkeleton, queueSkeleton } from "../../util/widgets/Skeletons";
import {
	APIContext,
	APIContextIF,
	QueueInformationContext,
	QueueInformationIF,
} from "../../Providers";
import { TrackDto } from "../../services-gen";

export default function Queue() {
	const queueInformation: QueueInformationIF = useContext(
		QueueInformationContext
	);
	const api: APIContextIF = useContext(APIContext);

	const [queue, setQueue] = useState(undefined as TrackDto[] | undefined);
	const [lockedSong, setLockedSong] = useState(
		undefined as TrackDto | undefined
	);
	const [rows, setRows] = useState([] as JSX.Element[]);

	useEffect(() => {
		if (queueInformation.queueId === "debug" && isDebug()) {
			setQueue(undefined);
		} else {
			api.party
				.getQueue({
					id: queueInformation.queueId!,
					withoutLocked: "true",
				})
				.then((res: TrackDto[]) => {
					setQueue(res);
				});
			api.party
				.getLockedTrack({ id: queueInformation.queueId! })
				.then((res: TrackDto) => {
					setLockedSong(res);
				});
		}
	}, []);

	function vote(track: TrackDto, up: boolean) {
		if (up) {
			api.party
				.upvoteTrack({
					id: queueInformation.queueId!,
					trackId: track.id!,
				})
				.then(() => {
					//TODO do something
				});
		} else {
			api.party
				.downvoteTrack({
					id: queueInformation.queueId!,
					trackId: track.id!,
				})
				.then(() => {
					//TODO do something
				});
		}
	}

	useEffect(() => {
		if (queue) {
			setRows([]);
			queue.forEach((track: TrackDto) => {
				setRows((rows) => [
					...rows,
					<div className="flex w-full justify-between h-14 space-x-3">
						<img
							src={track.coverUrl}
							alt="Cover"
							className="grow-0 h-14 w-14 rounded-lg"
						></img>
						<div className="grow flex flex-col space-y-2.5 justify-start">
							<p className="w-full h-4 font-bold">
								{track.name!.length > 19
									? track.name?.slice(0, 17).concat("...")
									: track.name}
							</p>
							<p className="h-2 w-full rounded text-sm">
								{track.artists?.join(", ")}
							</p>
						</div>
						<button
							className="flex grow-0 w-14 h-14"
							onClick={() => vote(track, true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-12 h-12 m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
								/>
							</svg>
						</button>
						<button
							className="flex grow-0 w-14 h-14"
							onClick={() => vote(track, false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-12 h-12 m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
								/>
							</svg>
						</button>
					</div>,
				]);
			});
		}
	}, [queue]);

	return (
		<>
			<div className="mt-7 min-h-screen w-full">
				<div className="px-5 flex flex-col w-full justify-start">
					<h1 className="text-2xl text-primary font-roboto mb-2">
						Nächster Song
					</h1>
					<div className="flex flex-col grow justify-start mb-4">
						{lockedSong ? (
							<div className="flex w-full justify-between h-14 space-x-3">
								<img
									src={lockedSong.coverUrl}
									alt="Cover"
									className="grow-0 h-14 w-14 rounded-lg"
								></img>
								<div className="grow flex flex-col space-y-2.5 justify-start">
									<p className="w-full h-4 font-bold">
										{lockedSong.name!.length > 35
											? lockedSong.name
													?.slice(0, 33)
													.concat("...")
											: lockedSong.name}
									</p>
									<p className="h-2 w-full rounded text-sm">
										{lockedSong.artists?.join(", ")}
									</p>
								</div>
							</div>
						) : (
							nextSongSkeleton()
						)}
					</div>
					<h1 className="text-2xl text-primary font-roboto mb-2">
						Warteschlange
					</h1>
					<div className="flex flex-col grow justify-start space-y-4">
						{queue ? <>{rows}</> : queueSkeleton()}
					</div>
				</div>
			</div>
		</>
	);
}
