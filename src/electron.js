// import * as Monitor from "../monitor/monitor.js"
import { Monitor } from "../monitor/build/Release/monitor.node";
import * as cp from "child_process";
import EventEmitter from "events";
import * as path from "path";
const { ipcRenderer } = __non_webpack_require__("electron/renderer");
const electron = __non_webpack_require__("electron");
const fs = __non_webpack_require__("fs");
const remote = electron.remote;

const { GlobalKeyboardListener } = __non_webpack_require__(
  "node-global-key-listener"
);
const mouseEvents = __non_webpack_require__("global-mouse-events");
const keyListener = new GlobalKeyboardListener();

const TIMEOUT_MS = 5 * 60 * 1000;
window.screensaver = new EventEmitter();
let showScreenSaver = false;

let timeout = setTimeout(() => {
  if (!showScreenSaver) {
    window.screensaver.emit("idle");
  }
  showScreenSaver = true;
}, TIMEOUT_MS);
const activityCallback = () => {
  if (showScreenSaver) {
    window.screensaver.emit("activity");
  }
  showScreenSaver = false;
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    if (!showScreenSaver) {
      window.screensaver.emit("idle");
    }
    showScreenSaver = true;
  }, TIMEOUT_MS);
};

mouseEvents.on("mousedown", activityCallback);
mouseEvents.on("mouseup", activityCallback);
mouseEvents.on("mousewheel", activityCallback);
mouseEvents.on("mousemove", activityCallback);
keyListener.addListener((e) => {
  console.log(e.name);
  if (e.name == "F12") {
    if (e.state == "DOWN") {
      if (!showScreenSaver) {
        window.screensaver.emit("idle");
      }
    }
    showScreenSaver = true;
    return;
  }
  activityCallback();
});

const GAMES_ROOT = "C:\\Program Files (x86)\\arcade\\games";

// class Monitor {}

class Launcher extends EventEmitter {
  path;
  monitor;
  interval;
  child_process;
  args;

  constructor(exePath, args) {
    super();
    this.path = exePath;
    this.args = args;
    this.monitor = new Monitor();
    this.monitor.setCallbacks(
      () => {
        this.emit("loading");
      },
      () => {
        this.emit("loaded");
        ipcRenderer.send("blur");
      },
      () => {
        this.emit("exit");
        this.monitor.kill();
        ipcRenderer.send("focus");
        clearInterval(this.interval);
      }
    );
    this.interval = setInterval(() => {
      this.monitor.tick();
    }, 100);
  }

  start() {
    this.monitor.start(path.basename(this.path));
    this.child_process = cp.exec(
      `"${path.join(GAMES_ROOT, this.path)}" ${this.args}`
    );

    window.screensaver.once("idle", () => {
      try {
        cp.exec(`taskkill /f /t /im "${path.basename(this.path)}"`);
        this.emit("exit");
        this.monitor.kill();
        clearInterval(this.interval);
        ipcRenderer.send("focus");
      } catch (e) {}
    });
  }

  stop() {
    this.monitor.kill();
    clearInterval(this.interval);

    try {
      cp.exec(`taskkill /f /t /im "${path.basename(this.path)}"`);
      this.emit("exit");
      this.monitor.kill();
      clearInterval(this.interval);
      ipcRenderer.send("focus");
    } catch (e) {}
  }
}

window.Launcher = Launcher;
window.setFullscreen = (fullscreen) =>
  ipcRenderer.send("set-fullscreen", fullscreen);
window.appExePath = ipcRenderer.sendSync("app-exe-path");
window.userDataPath = ipcRenderer.sendSync("user-data-path");
window.killApp = (path) => {
  try {
    cp.exec(`taskkill /f /t /im "${path.basename(this.path)}"`);
    this.emit("exit");
    this.monitor.kill();
    clearInterval(this.interval);
    ipcRenderer.send("focus");
  } catch (e) {}
};
window.dataLog = (str) => {
  fs.appendFileSync(
    path.join(window.userDataPath, "game-log.txt"),
    str,
    "utf8"
  );
};
