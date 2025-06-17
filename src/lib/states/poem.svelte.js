const Speeds = Object.freeze({
	Slow: 1500,
	Medium: 1000,
	Fast: 600
});

export const poemState = $state({
	wasNameSubmited: false,
	poem: [],
	speed: Speeds.Medium
});

export let currentSpeed = Object.keys(Speeds).find((key) => Speeds[key] === poemState.speed);

export const togglePoemSpeed = (() => {
	switch (poemState.speed) {
		case Speeds.Slow:
			poemState.speed = Speeds.Medium;
			break;
		case Speeds.Medium:
			poemState.speed = Speeds.Fast;
			break;
		case Speeds.Fast:
			poemState.speed = Speeds.Slow;
			break;
		default:
			break;
	}
});