// import * as Monitor from "../monitor/monitor.js"
import {
  Monitor
} from "../monitor/build/Release/monitor.node"
import * as cp from "child_process";
import EventEmitter from "events";
import * as path from "path";
const { ipcRenderer } = __non_webpack_require__("electron/renderer");

const GAMES_ROOT = "C:\\Program Files (x86)\\arcade\\games"

class Launcher extends EventEmitter {
  path;
  monitor;
  interval;
  child_process;

  constructor(exePath) {
    super();
    this.path = exePath;
    this.monitor = new Monitor();
    this.monitor.setCallbacks(() => {
      this.emit("loading");
    }, () => {
      this.emit("loaded");
    }, () => {
      this.emit("exit");
      this.monitor.kill();
      clearInterval(this.interval);
    })
    this.interval = setInterval(() => {
      this.monitor.tick();
    }, 100);
  }

  start() {
    this.monitor.start(path.basename(this.path));
    console.log(path.join(GAMES_ROOT, this.path));
    console.log(this.path);
    console.log(GAMES_ROOT);
    this.child_process = cp.exec(`"${path.join(GAMES_ROOT, this.path)}"`);
  }

  stop() {
    this.monitor.kill();
    clearInterval(this.interval);

    if (this.child_process) {
      this.child_process.kill("SIGKILL");
    }
  }
}

window.Launcher = Launcher;
window.setFullscreen = (fullscreen) => ipcRenderer.send("set-fullscreen", fullscreen);
window.appExePath = ipcRenderer.sendSync("app-exe-path");
