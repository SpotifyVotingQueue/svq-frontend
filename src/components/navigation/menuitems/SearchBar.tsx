import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	APIContext,
	APIContextIF,
	QueueInformationContext,
	QueueInformationIF,
	SearchContext,
	SearchContextIF,
} from "../../../Providers";
import { TrackDto } from "../../../services-gen";
import { isDebug } from "../../../util/debug/DebugEnv";

export default function SearchBar() {
	let navigate = useNavigate();

	const search: SearchContextIF = useContext(SearchContext);
	const api: APIContextIF = useContext(APIContext);
	const party: QueueInformationIF = useContext(QueueInformationContext);

	let { pathname } = useLocation();
	function navigateSearch(): void {
		if (!pathname.endsWith("/search")) {
			navigate(`${pathname}/search`);
			if (party.queueId === "debug" && isDebug()) {
				search.setResult(undefined);
			} else {
				onSearch("");
			}
		}
	}

	async function onSearch(query: string) {
		if (query === "" || !query) {
			api.track
				.getRecommendations({ partyId: party.queueId as string })
				.then((res: TrackDto[]) => {
					search.setResult(res);
				});
		} else {
			api.track
				.searchTracks({
					query: query,
					partyId: party.queueId as string,
				})
				.then((res: TrackDto[]) => {
					search.setResult(res);
				});
		}
	}

	return (
		<div className="w-1/3 my-auto">
			<input
				type="text"
				className="bg-primary text-backgroundLight rounded-full h-8 pl-3 pr-2 pb-0.5"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onSearch(e.target.value)
				}
				placeholder="Suche"
				onFocus={() => navigateSearch()}
			/>
			<div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
				<svg
					aria-hidden="true"
					className="w-5 h-5 text-backgroundLight"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
			</div>
		</div>
	);
}
