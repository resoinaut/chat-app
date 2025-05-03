"use strict";

const fs = require("fs");

if (!fs.existsSync("./temp/messages.json"))
	fs.writeFileSync("./temp/messages.json", "[]");

/**
 * @returns {object[]}
 */
function all()
{
	return JSON.parse(fs.readFileSync("./temp/messages.json"));
}

/**
 * @param {object} message
 * @returns {void}
 */
function save(message)
{
	const messages = all();
	messages.push(message);

	fs.writeFileSync("./temp/messages.json", JSON.stringify(messages));
}

module.exports = { all, save };