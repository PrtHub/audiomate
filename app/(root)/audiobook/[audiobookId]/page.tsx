import React from "react";

const AudioBookPage = ({ params }: { params: { audiobookId: string } }) => {
  return (
    <div>
      <h1 className="text-20 font-bold text-white-1">Audio Book Id: {params.audiobookId}</h1>
    </div>
  );
};

export default AudioBookPage;
