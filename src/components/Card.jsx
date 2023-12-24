import React from "react";
import Tags from "./Tags";

function Card({ codeUrl, previewUrl, imgUrl, title, desc, tags }) {
	return (
		<div className="p-4 border-2 border-neutral-200 hover:border-[3px] rounded-[20px]">
			<div className="border-2 border-neutral-200 rounded-[20px] overflow-hidden relative">
				<div className="absolute top-4 right-4">
					<a href={codeUrl} target="_blank">
						<span className="material-symbols-rounded text-4xl cursor-pointer">
							data_object
						</span>
					</a>
					<a href={previewUrl} target="_blank">
						<span className="material-symbols-rounded text-4xl cursor-pointer">
							north_east
						</span>
					</a>
				</div>
				<img src={imgUrl} alt={imgUrl} className="w-full" />
			</div>

			<div className="mt-4 px-4">
				<div className="flex justify-between">
					<div id="title" className="text-black text-4xl font-medium">
						{title}
					</div>
					<div>
						<span className="material-symbols-rounded text-4xl cursor-pointer">
							expand_more
						</span>
					</div>
				</div>
				<p className="text-2xl font-light break-words">{desc}</p>
				<Tags data={tags} />
			</div>
		</div>
	);
}

export default Card;
