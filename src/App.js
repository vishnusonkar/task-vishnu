// import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Sidebar from "./components/Sidebar";
// import ImageDisplay from "./components/ImageDisplay";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="flex max-w-6xl mx-auto bg-white shadow-lg rounded-lg ">
//         <Sidebar />
//         <ImageDisplay />
//       </div>
//     </Provider>
//   );
// };

// export default App;
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import LayOutComponent from "./components/LayOutComponent";

const App = () => {
  return (
    <Provider store={store}>
      <LayOutComponent />
    </Provider>
  );
};

export default App;

