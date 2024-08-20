import React, { useState } from "react";
import backgroundImage from "./asset/Image.jpeg"; 
import backgroundImagecenter from "./asset/coinnew.jpeg"; 
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
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-between items-center py-4 px-4">
        <h1 className="text-4xl font-bold text-white">
          Project Jail Break
        </h1>
    
        <button
          onClick={refreshIframe}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          Refresh Iframe
        </button>
      </div>
      <div className="flex-grow bg-white shadow-md rounded-lg overflow-hidden mb-0">
        <div
          key={iframeKey}
          dangerouslySetInnerHTML={createEmbedMarkup()}
        />
      </div>
    </div>
  );
}

export default App;
