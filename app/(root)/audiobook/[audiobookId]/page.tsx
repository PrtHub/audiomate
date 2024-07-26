import React from "react";

const AudioBookPage = ({ params }: { params: { audiobookId: string } }) => {
  return <div>AudioBookPage: {params.audiobookId}</div>;
};

export default AudioBookPage;
