export default function Join(): JSX.Element {
	return (
		<div className="flex flex-col h-full">
			<div className="h-1/3 w-2/3 m-auto">
				<h1 className="text-4xl text-center">Join by Code</h1>
				<input
					className="w-full h-1/3 m-auto"
					type="text"
					placeholder="Code"
				/>
			</div>
		</div>
	);
}
