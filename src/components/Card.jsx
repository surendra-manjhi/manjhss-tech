import React from "react";
import Tags from "./Tags";

function Card({ codeUrl, previewUrl, imgUrl, title, desc, tags }) {
	return (
		<div className="project-wrapper">
			<div className="border-2 border-neutral-200 dark:border-gray-700 rounded-[20px] overflow-hidden relative">
				<img src={imgUrl} alt={imgUrl} className="w-full" />

				<div className="absolute top-4 right-4 flex rounded-full overflow-hidden">
					<a
						className="material-symbols-rounded text-4xl cursor-pointer"
						href={codeUrl}
						target="_blank"
					>
						data_object
					</a>

					<a
						className="material-symbols-rounded text-4xl cursor-pointer"
						href={codeUrl}
						target="_blank"
					>
						north_east
					</a>
				</div>
			</div>

			<div className="pt-4 text-black dark:text-white">
				<div className="flex justify-between">
					<div id="title" className="text-4xl font-medium">
						{title}
					</div>

					<div className="material-symbols-rounded text-4xl cursor-pointer">
						expand_more
					</div>
				</div>

				{/* <p className="my-4 text-2xl font-light break-words">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Tempora dolor aut, officiis consectetur quisquam vel saepe.
					Maxime unde ducimus nobis!
				</p> */}

				<div className="mt-4 flex gap-2 flex-wrap">
					{tags?.map((tag, index) => (
						<Tags key={index} data={tag} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Card;
