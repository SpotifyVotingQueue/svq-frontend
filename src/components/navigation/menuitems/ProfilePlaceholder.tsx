import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePlaceholder(): JSX.Element {
	let navigate = useNavigate();

	let { pathname } = useLocation();

	function onLogin() {
		navigate(`/login?redirect=${pathname.slice(1, pathname.length)}`);
	}

	return (
		<div className="ml-auto">
			<button
				style={{
					height: "5vh",
					width: "5vh",
					display: "flex",
					marginRight: "2.5vh",
					marginTop: "2.5vh",
				}}
				className="text-primary fill-primaryDark bg-primaryDark rounded-full"
				onClick={() => onLogin()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-6 h-6"
					style={{ height: "5vh", width: "5vh" }}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</button>{" "}
		</div>
	);
}
