import React, { useState } from "react";

import song from "../assets/music/song.mp3";

function Music() {
	let music = new Audio(song);

	return (
		<button
			onClick={() => music.play()}
			class="material-symbols-rounded text-6xl fixed right-12 bottom-12"
		>
			music_note
		</button>
	);
}

export default Music;
