import * as React from "react";
import "./8.scss";

const useKeyEvent = (
  eventType: "keydown" | "keyup" | "keypress",
  callback: (event: KeyboardEvent) => Promise<void> | void
) => {
  // Save callback as ref so it won't trigger useEffect (ref always retains referential integrity)
  // but always have latest callback available
  const cb = React.useRef(callback);
  React.useEffect(() => {
    cb.current = callback;
  });

  React.useEffect(() => {
    window.addEventListener(eventType, cb.current, true);

    return () => {
      window.removeEventListener(eventType, cb.current, true);
    };
  }, [eventType, cb]);
};

const KeyListener: React.FC = (props) => {
  const [lastPressedKey, setLastPressedKey] = React.useState("");

  useKeyEvent("keydown", (event) => setLastPressedKey(event.key));

  return (
    <div>
      <span>Last key pressed: </span>
      <span className="exercise-8__key">{lastPressedKey}</span>
    </div>
  );
};

export default KeyListener;
