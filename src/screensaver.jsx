import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import p5 from "p5";

export const ScreenSaver = () => {
  const [showScreenSaver, setShowScreenSaver] = useState(false);
  const TIMEOUT_MS = 1 * 1000;
  useEffect(() => {
    if (!window.screensaver) return;
    const activityCb = () => {
      setShowScreenSaver(false);
    }
    window.screensaver.on("activity", activityCb);
    const idleCb = () => {
      setShowScreenSaver(true);
    }
    window.screensaver.on("idle", idleCb);
    return () => {
      window.screensaver.off("activity", activityCb);
      window.screensaver.off("idle", idleCb);
    }
  }, []);
  
  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setShowScreenSaver(true);
  //   }, TIMEOUT_MS);
  //   const activityCallback = () => {
  //     setShowScreenSaver(false);
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }
  //     timeout = setTimeout(() => {
  //       setShowScreenSaver(true);
  //     }, TIMEOUT_MS);
  //   };
  //   document.body.addEventListener("keypress", activityCallback);
  //   document.body.addEventListener("mousemove", activityCallback);
  //   document.body.addEventListener("mousedown", activityCallback);
  //   return () => {
  //     document.body.removeEventListener("keypress", activityCallback);
  //     document.body.removeEventListener("mousemove", activityCallback);
  //     document.body.removeEventListener("mousedown", activityCallback);
  //   };
  // }, []);

  const parent = useRef();
  const pRef = useRef();

  useEffect(() => {
    const p = new p5(() => {}, parent.current);
    pRef.current = p;

    let video;

    p.setup = () => {
      p.createCanvas(1024, 768);
      video = p.createVideo(require("./assets/screensaver.mp4"));
      video.loop();
      video.hide();
    };

    p.draw = () => {
      p.blendMode(p.BLEND);
      p.image(video, 0, 0);

      p.blendMode(p.REMOVE);
      p.fill(255, 255, 255);
      p.textSize(40);
      p.textFont("Arial");

      for (let y = 0; y < 10; y++) {
        const now = Date.now();
        const text = "PLAY GAMES! CHƠI NGAY! RMIT Vietnam";
        for (let i = 0; i < text.length; i++) {
          p.textSize(40 + Math.sin(i + now / 200 + y * 1000) * 20);
          p.text(
            text.charAt(i),
            ((30 * i + 10 + now / 10 + y * 1200) % 1100) - 50,
            100 + Math.sin(now / 200 + i * 0.5) * 20 + y * 200
          );
        }
      }
    };

    p.setup();
    return () => {
      p.remove();
    };
  }, []);

  useEffect(() => {
    if (showScreenSaver) {
      pRef.current.loop();
    } else {
      pRef.current.noLoop();
    }
  }, [showScreenSaver]);

  return (
    <div
      className="screen-saver"
      style={{ display: showScreenSaver ? "block" : "none" }}
      ref={parent}
    >
      {/* <video autoPlay loop muted src={require("./assets/screensaver.mp4")} /> */}
    </div>
  );
};
