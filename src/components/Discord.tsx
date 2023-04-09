import { useEffect, useState } from "react";
import { Data } from "use-lanyard";

export const Discord = ({
	lanyard,
	statusColor, 
}: {
	lanyard: Data | undefined;
	statusColor: string | undefined; 
}) => {
	const mainActivity = lanyard?.activities.find(
		(activity) => activity.type === 0
	);

	const [style, setStyle] = useState({});

	useEffect(() => {
		setStyle({
			backgroundColor: statusColor,
			'border-color': statusColor,
			'border-width': '0.2rem',
		});
	}, [statusColor]);

	return (
		<div className="flex flex-col items-center">
			<div className="my-5 flex h-[9.37rem] min-w-[18.75rem] px-5 items-center justify-center rounded-lg bg-[#1F1F1F]">
				{mainActivity ? (
					<div className="flex flex-row items-center">
						<img
							src={
								mainActivity.assets?.large_image.startsWith(
									"mp:external"
								)
									? mainActivity.assets.large_image.replace(
										/mp:external\/([^]*)\/(http[s])/g,
										"$2:/"
									)
									: `https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets?.large_image}.webp`
							}
							alt="activity"
							className="mr-3 h-[5rem] w-[5rem] rounded-lg"
						/>
						<div className="flex flex-col truncate">
							<p className="text-[0.8rem] font-bold text-secondary">
								{mainActivity.name}
							</p>
							<p className="text-[0.8rem] text-secondary">
								{mainActivity.details}
							</p>
							<p className="text-[0.8rem] text-secondary">
								{mainActivity.state}
							</p>
						</div>
					</div>
				) : (
					<p className="font-bold text-secondary">
						I'm not currently doing anything
					</p>
				)}
			</div>
			<a
				href="https://discord.com/users/432958582536011777"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div
					className="max-w-max rounded-lg p-2 px-5 font-bold text-secondary transition-all hover:-translate-y-1 active:translate-y-1"
					style={style}
					onMouseEnter={() =>
						setStyle({
							'border-width': '0.2rem',
							'border-color': statusColor,
							color: statusColor,
						})
					}
					onMouseLeave={() =>
						setStyle({
							'border-width': '0.2rem',
							'border-color': statusColor,
							backgroundColor: statusColor,
						})
					}
					onPointerDown={() =>
						setStyle({
							'border-width': '0.2rem',
							'border-color': statusColor,
							color: statusColor,
						})
					}
				>
					{lanyard
						? lanyard.discord_status.charAt(0).toUpperCase() +
						lanyard.discord_status.slice(1)
						: "Offline"}{" "}
					on Discord
				</div>
			</a>
		</div>
	);
};
