import * as React from "react";

const TitleChanger: React.FC = (props) => {
  const [title, setTitle] = React.useState("My own title");

  // Synchronize document title to title state
  // https://twitter.com/ryanflorence/status/1125041041063665666
  React.useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
    </div>
  );
};

export default TitleChanger;
