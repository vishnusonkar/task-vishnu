import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/itemSlice";
import ImageDisplay from "./ImageDisplay";
import ListDetailComponent from "./ListDetailComponent";

const LayOutComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error, selectedItem } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  if (!data) return null;

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <ListDetailComponent items={data.items} />
      <ImageDisplay selectedItem={selectedItem} items={data.items} />
    </div>
  );
};

export default LayOutComponent;