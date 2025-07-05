import { useEffect, useState } from "react";

export function ScreenSaver() {
  const [showScreenSaver, setShowScreenSaver] = useState(false);
  const TIMEOUT_MS = 60 * 1000;
  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowScreenSaver(true);
    }, TIMEOUT_MS);
    const activityCallback = () => {
      setShowScreenSaver(false);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setShowScreenSaver(true);
      }, TIMEOUT_MS);
    };
    document.body.addEventListener("keypress", activityCallback);
    document.body.addEventListener("mousemove", activityCallback);
    document.body.addEventListener("mousedown", activityCallback);
    return () => {
      document.body.removeEventListener("keypress", activityCallback);
      document.body.removeEventListener("mousemove", activityCallback);
      document.body.removeEventListener("mousedown", activityCallback);
    };
  }, []);

  return (
    <div
      className="screen-saver"
      style={{ display: showScreenSaver ? "block" : "none" }}
    >
      <video autoPlay loop muted src={require("./assets/screensaver.mp4")} />
    </div>
  );
}
