#!usr/bin/env node

const messages	= require("./messages");
const router	= require("./router");

const express	= require("express");
const app		= express();

const server	= require("http").createServer(app);
const WebSocket	= require("ws");

const wss		= new WebSocket.Server({ server: server });
const clients	= new Set();

wss.on("connection", ws => {
	clients.add(ws);

	ws.on("message", message => {
		string_message = message.toString();
		messages.save(JSON.parse(string_message));

		clients.forEach(client => {
			if (client !== ws) client.send(string_message);
		});
	});
});

app.use(express.static("public"));
app.use('/', router);

server.listen(3000, () => console.log('\n[!] Listening on port 3000.\n'));
