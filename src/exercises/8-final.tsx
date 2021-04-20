import * as React from "react";
import "./8.scss";

const KeyListener: React.FC = (props) => {
  const [lastPressedKey, setLastPressedKey] = React.useState("");

  React.useEffect(() => {
    const callback = (event: KeyboardEvent) => setLastPressedKey(event.key);

    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div>
      <span>Last key pressed: </span>
      <span className="exercise-8__key">{lastPressedKey}</span>
    </div>
  );
};

export default KeyListener;
