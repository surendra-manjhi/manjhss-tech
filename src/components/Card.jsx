import React, { useState } from "react";
import Tags from "./Tags";

function Card({ codeUrl, previewUrl, imgUrl, title, desc, tags }) {
	let [isDisplay, setIsDisplay] = useState(false);

	return (
			<div className="project-wrapper">
				<div className="overflow-hidden relative">
					<img src={imgUrl} alt={imgUrl} className="w-full" />

					<div className="absolute top-4 right-4 flex rounded-full overflow-hidden">
						<a
							className="material-symbols-rounded text-[calc(26px_+_0.390625vw)] cursor-pointer"
							href={codeUrl}
							target="_blank"
						>
							data_object
						</a>

						<a
							className="material-symbols-rounded text-[calc(26px_+_0.390625vw)] cursor-pointer"
							href={previewUrl}
							target="_blank"
						>
							north_east
						</a>
					</div>
				</div>

				<div className="px-6 pt-4 text-white">
					<div className="flex justify-between">
						<div
							id="title"
							className="text-[calc(26px_+_0.390625vw)] font-medium"
						>
							{title}
						</div>

						<button
							className="material-symbols-rounded text-[calc(26px_+_0.390625vw)] cursor-pointer"
							onClick={() => setIsDisplay(!isDisplay)}
						>
							{isDisplay ? "expand_less" : "expand_more"}
						</button>
					</div>

					{isDisplay && (
						<p className="my-4 text-[calc(18px_+_0.390625vw)] font-light break-words">
							{desc}
						</p>
					)}

					<div className="pb-6 mt-4 flex gap-2 flex-wrap">
						{tags?.map((tag, index) => (
							<Tags key={index} data={tag} />
						))}
					</div>
				</div>
			</div>
	);
}

export default Card;
