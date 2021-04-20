import * as React from "react";

const TitleChanger: React.FC = (props) => {
  const [title, setTitle] = React.useState("My own title");

  // Synchronize document title to title state
  // https://twitter.com/ryanflorence/status/1125041041063665666
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  // Keep original document.title in store for cleaning up
  const [initialTitle] = React.useState(document.title);

  // Reset document title on unmount
  // We don't want `value` affecting this cleanup, so this is defined in separate `useEffect` call
  React.useEffect(() => {
    // Return cleanup function from hook. Cleanup runs every time when props change before render
    return () => {
      document.title = initialTitle;
    };

    // Since we know that initialTitle will not change, we could omit it from dependency array,
    // but linter will yell at us and silencing it opens up a window for future bugs.
    // Always respect `react-hooks/exhaustive-deps` rule unless you are absolutely sure you know
    // what you're doing, and leave comment reasoning the disable
  }, [initialTitle]);

  return (
    <div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <p>Initial title: {initialTitle}</p>
    </div>
  );
};

export default TitleChanger;
