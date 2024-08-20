import React, { useState } from "react";
import InnerHTML from "dangerously-set-html-content";

function App() {
  const [iframeKey, setIframeKey] = useState(0);

  function createEmbedMarkup() {
    return {
      __html: `<iframe src="https://brackethq.com/b/ms41b/embed/" width="100%" height="900" frameborder="0"></iframe>`,
    };
  }

  function refreshIframe() {
    setIframeKey((prevKey) => prevKey + 1); // Increment key to force re-render
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">
        Project Jail Break
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <InnerHTML html={createEmbedMarkup().__html} />
      </div>
      <button
        onClick={refreshIframe}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refresh Iframe
      </button>
    </div>
  );
}

export default App;