import React, { useState } from "react";
import Tags from "./Tags";

function Card({ codeUrl, previewUrl, imgUrl, title, desc, tags }) {
	let [isDisplay, setIsDisplay] = useState(false);

	return (
		<div className="project-wrapper">
			<div className="rounded-2xl overflow-hidden relative">
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
						href={previewUrl}
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

					<button
						className="material-symbols-rounded text-4xl cursor-pointer"
						onClick={() => setIsDisplay(!isDisplay)}
					>
						{isDisplay ? "expand_less" : "expand_more"}
					</button>
				</div>

				{isDisplay && (
					<p className="my-4 text-2xl font-light break-words">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Debitis eum aut quam, a dicta nisi odio incidunt,
						vitae error eveniet rerum in doloribus laboriosam neque
						quidem sapiente reiciendis omnis! Minima!
					</p>
				)}

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
