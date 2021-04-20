import * as React from "react";

const TitleChanger: React.FC = (props) => {
  const [title, setTitle] = React.useState("My own title");

  // Our product owner wants that window title changes to match input.
  // Use `React.useEffect` to synchronize `document.title` with input.

  // 🔥 For extra points, add dependency array to useEffect, so that document.title only changes
  // when input changes. Respect `react-hooks/exhaustive-deps` eslint rule.

  // 🔥🔥🔥🔥 Our product owner is concerned that window title remains the same after changing page.
  // Reset document.title to the value it was when component mounted
  // TIP: useEffect has cleanup functionality, and you can have more than one useEffects in a component
  // TIP: You can store initial value with useState or useRef

  return (
    <div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
    </div>
  );
};

export default TitleChanger;
