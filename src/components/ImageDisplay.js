import React from "react";

const ImageDisplay = ({ selectedItem }) => {
  if (!selectedItem) {
    return <p className="text-center mt-4">Select an item to view details</p>;
  }

  return (
    <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-center mt-2 md:mt-auto self-end">
      <div className="w-full h-64 md:h-96 bg-gray-200 shadow-md overflow-hidden">
        <img
          src={selectedItem.imgUrl}
          alt={selectedItem.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-4 text-left">{selectedItem.imagDesc}</p>
    </div>
  );
};

export default ImageDisplay;
