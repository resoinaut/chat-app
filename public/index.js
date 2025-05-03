"use strict";

const socket    = new WebSocket("ws://localhost:3000");

const response1	= await fetch("http://localhost:3000/generateaccount");
const account	= await response1.json();

socket.addEventListener("message", event => sendMessage(JSON.parse(event.data)));

/** @type {HTMLDivElement} */
const messagesDiv = document.getElementById("messages");

/** @type {HTMLInputElement} */
const messageInput = document.getElementById("message-input");

const response2	= await fetch("http://localhost:3000/messages");
const messages	= await response2.json();

messages.forEach(message => sendMessage(message));

document.getElementById("send-button").addEventListener("click", () => {
	messageInput.value = messageInput.value.trim();

	if (!messageInput.value.length) return;

	const message = {
		color: account.color,
		handle: account.handle,
		content: messageInput.value
	};

	messageInput.value = '';
	sendMessage(message);
	socket.send(JSON.stringify(message));
});

messageInput.addEventListener("input", () => {
	if (messageInput.value.trim().length === 0) messageInput.value = '';
});

/**
 * @typedef {object} Message
 * @property {string} color
 * @property {string} handle
 * @property {string} content
 */

/**
 * @param {Message} message
 * @returns {void}
 */
function sendMessage(message)
{
	messagesDiv.innerHTML += `
		<div class="message">
			<div class="pfp-container">
				<div class="pfp" style="background-color: ${message.color}"></div>
			</div>
			<div class="content">
				<div class="account">@${message.handle}</div>
				<div class="message">${message.content}</div>
			</div>
		</div>
	`;
}
