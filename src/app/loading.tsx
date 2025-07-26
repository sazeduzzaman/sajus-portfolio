import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <HashLoader color="#d7fa00" size={50} />
      </div>
    </div>
  );
};

export default Loading;
