import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/itemSlice";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const ListDetailComponent = () => {
  const dispatch = useDispatch();
  const { data, selectedItem } = useSelector((state) => state.items);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/2 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold leading-tight">{data.title}</h1>
      <p className="font-bold mt-2 md:mt-4 mb-4 md:mb-6">{data.subTitle}</p>

      <div className="relative">
        {data.items.map((item, index) => (
          <div
            key={item.name}
            className="relative flex items-start gap-4 pb-4 md:pb-8 cursor-pointer transition-all"
            onClick={() => dispatch(setSelectedItem(item))}
          >
            {index !== data.items.length - 1 && (
              <div className="absolute left-[12px] top-6 w-[2px] h-full bg-gray-300"></div>
            )}

            <div
              className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full ${
                selectedItem?.name === item.name ? "bg-[#E8EDFB]" : "bg-white border-2 border-gray-400"
              }`}
            >
              <span className={`text-xs ${selectedItem?.name === item.name ? "text-blue-500" : "text-red-500"}`}>
                {selectedItem?.name === item.name ? <AiOutlineCheck /> : <AiOutlineClose className="text-gray-500" />}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-sm md:text-lg font-semibold">{item.name}</h3>
              <p className="text-xs md:text-sm text-gray-500 mr-[20px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDetailComponent;