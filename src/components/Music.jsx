import React, { useState } from "react";

import song from "../assets/music/song.mp3";

function Music() {
	const music = new Audio(song);
	const [isPlaying, setIsPlaying] = useState(true);

	return (
		<button
			onClick={() => {
				music.play();
				setIsPlaying(!isPlaying);
			}}
			class="material-symbols-rounded text-6xl fixed right-12 bottom-12"
		>
			{isPlaying ? "music_note" : "music_off"}
		</button>
	);
}

export default Music;
