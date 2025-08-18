import { readFileSync } from "fs";
import path from "path";

let log = readFileSync(path.join(process.cwd(), "./game-log.txt"), "utf8");
log = log.replace(/}/g, "}\n");
const lines = log.split("\n");

const games = {};

let gameCounter = 0;
let gameCounterPerGame = {};
let longestSessions = [];

for (const line of lines) {
  console.log("\n");
  console.log(line);
  if (line) {
    const data = JSON.parse(line);
    if (data.event === "start") {
      games[data.instanceUuid] = data;
    }

    if (data.event === "end") {
      if (games[data.instanceUuid]) {
        const other = games[data.instanceUuid];
        const me = data;

        if (me.time - other.time > 1000 * 60 * 1) {
          gameCounterPerGame[me.gameId] =
            (gameCounterPerGame[me.gameId] || 0) + 1;
          gameCounter++;
          longestSessions.push([me.time - other.time, me.gameId]);
        }

        delete games[data.instanceUuid];
      }
    }
  }
}

longestSessions = longestSessions.sort((a, b) => {
  return b[0] - a[0];
});

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

console.log(gameCounter);
console.log(gameCounterPerGame);
console.log(
  longestSessions.map((val) => [msToTime(val[0]), val[1]]).slice(0, 20)
);

console.log(
  longestSessions.map((val) => [msToTime(val[0]), val[1]]).slice(longestSessions.length-20, 20)
);
