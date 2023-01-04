import React, { useEffect, useState } from "react";
import { PlaylistDto } from "../../../services-gen";
import { playlistSkeleton } from "../../../util/widgets/Skeletons";

export interface PlaylistsProps {
	playlists: PlaylistDto[] | undefined;
}

export default function Playlists(props: PlaylistsProps) {
	const [rows, setRows] = useState(Array<JSX.Element>());

	function splitReverse(str: string): string[] {
		console.log("input", str);
		let rep: string[];
		let range: number = 3;
		do {
			const reversed = str.split("").reverse().join("");
			const index = reversed.indexOf(" ", range);
			if (index === -1) {
				rep = [str, ""];
				break;
			}
			const reversedArray = [
				reversed.slice(0, index),
				reversed.slice(index + 1),
			];
			rep = reversedArray
				.map((s) =>
					s.length > 14
						? s.split("").reverse().join("")
						: s.split("").reverse().join("").slice(0, 12)
				)
				.reverse();
			range++;
		} while (rep[0].length > 12);
		console.log("output", rep);
		return rep.map((s) =>
			s.length > 12 ? s.slice(0, 10).concat("...") : s
		);
	}

	function openPlaylist(playlist: PlaylistDto) {
		// TODO: Open playlist
	}

	useEffect(() => {
		if (props.playlists) {
			setRows([]);
			for (let i: number = 0; i < props.playlists.length; i += 2) {
				const playlist1: PlaylistDto = props.playlists[i];
				const playlist2: PlaylistDto = props.playlists[i + 1];
				setRows((rows) => [
					...rows,
					<div className="flex h-0.45 justify-between">
						<div
							onClick={() => openPlaylist(playlist1)}
							className="flex w-0.45 h-full bg-bgPlaylist rounded-lg"
						>
							<img
								className="w-0.45 h-full rounded-lg"
								src={playlist1.cover?.href}
								alt="Cover"
							></img>
							<div className="flex flex-col w-2/3 h-full">
								<p className="w-full h-3 mx-2 mt-0.5 font-bold text-sm">
									{playlist1.name!.length > 11
										? splitReverse(playlist1.name!)[0]
										: playlist1.name}
								</p>
								{playlist1.name!.length > 11 && (
									<p className="w-full h-3 mt-1 mx-2 font-bold text-sm">
										{splitReverse(playlist1.name!)[1]}
									</p>
								)}
								<p className="w-full h-2 mt-3 ml-2 text-xs">
									{"By " + playlist1.owner}
								</p>
							</div>
						</div>
						<div
							onClick={() => openPlaylist(playlist2)}
							className="flex w-0.45 h-full bg-bgPlaylist rounded-lg"
						>
							<img
								className="w-0.45 h-full rounded-lg"
								src={playlist2.cover?.href}
								alt="Cover"
							></img>
							<div className="flex flex-col w-2/3 h-full">
								<p className="w-full h-3 mt-0.5 mx-2 font-bold text-sm">
									{playlist2.name!.length > 11
										? splitReverse(playlist2.name!)[0]
										: playlist2.name}
								</p>
								{playlist2.name!.length > 11 && (
									<p className="w-full h-3 mt-1 mx-2 font-bold text-sm">
										{splitReverse(playlist2.name!)[1]}
									</p>
								)}
								<p className="w-full h-2 mt-3 ml-2 text-xs">
									{"By " + playlist2.owner}
								</p>
							</div>
						</div>
					</div>,
				]);
			}
		}
	}, [props.playlists]);

	return (
		<div className="min-h-screen-20 mx-5 mt-7 flex flex-col">
			<h1 className="text-2xl text-primary font-roboto mb-2">
				Deine Playlists
			</h1>
			{props.playlists ? (
				<div className="grow flex flex-col justify-between">{rows}</div>
			) : (
				playlistSkeleton()
			)}
		</div>
	);
}
