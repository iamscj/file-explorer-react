import { useState } from "react";

export const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (!explorer.isFolder) {
    return <span className="file">📄 {explorer.name}</span>;
  }

  return (
    <div>
      <div className="folder" onClick={() => setExpand(!expand)}>
        <span>📂 {explorer.name}</span>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {explorer.items.map((item) => {
          return <Folder explorer={item} />;
        })}
      </div>
    </div>
  );
};
