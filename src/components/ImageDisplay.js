import React from "react";

const ImageDisplay = ({ selectedItem }) => {
    console.log(selectedItem);
  if (!selectedItem) {
    return <p className="text-center mt-4">Select an item to view details</p>;
  }

  return (
    <div className="w-1/2 p-8 flex flex-col items-center mt-[225px]">
      <div className="w-full h-96 bg-gray-200 shadow-md overflow-hidden">
        <img
          src={selectedItem.imgUrl}
          alt={selectedItem.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-500 text-sm mt-4 text-left">{selectedItem.imagDesc}</p>
    </div>
  );
};

export default ImageDisplay;
