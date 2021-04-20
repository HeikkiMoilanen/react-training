/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import "./8.scss";

const KeyListener: React.FC = (props) => {
  const [lastPressedKey, setLastPressedKey] = React.useState("");

  // use useEffect to attach keyboard event listener that tracks last "keydown" key (event.key).
  // Don't forget to clean up event listener, we don't want memory leaks!
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {};
  }, []);

  // 🔥🔥🔥🔥🔥🔥🔥🔥 For a boatload of extra points, define custom useKeyEvent hook that accepts callback
  // And use it on this hook. Be careful of stale references!

  return (
    <div>
      <span>Last key pressed: </span>
      <span className="exercise-8__key">{lastPressedKey}</span>
    </div>
  );
};

export default KeyListener;
