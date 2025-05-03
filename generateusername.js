"use strict";

const colors = [
	{ code: "#fbf8cc", name: "yellow"	},
	{ code: "#fde4cf", name: "beige"	},
	{ code: "#ffcfd2", name: "red"		},
	{ code: "#f1c0e8", name: "pink"		},
	{ code: "#cfbaf0", name: "purple"	},
	{ code: "#a3c4f3", name: "blue"		},
	{ code: "#90dbf4", name: "cyan"		},
	{ code: "#8eecf5", name: "aqua"		},
	{ code: "#98f5e1", name: "green"	},
	{ code: "#b9fbc0", name: "lime"		},
];

const animals = [
	"horse", "bobcat", "giraffe", "orangutang", "boar", "koala", "chipmunk", "platypus", "badger", "hamster",
];

module.exports = () => {
	const color = colors[Math.floor(Math.random() * colors.length)];

	return {
		color: color.code,
		handle: color.name + animals[Math.floor(Math.random() * animals.length)],
	};
};
