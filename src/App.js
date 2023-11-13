import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
        {/**
          Head
          Body
            sidebar
              MenueItems
            Maincontainer
              ButtonsList
              Videocontainer
                VideoCard
      
       */}
      </div>
    </Provider>
  );
}

export default App;
