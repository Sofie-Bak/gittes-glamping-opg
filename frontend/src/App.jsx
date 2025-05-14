import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Activities from "./pages/activities/Activities";
import Backoffice from "./pages/backoffice/Backoffice";
import Contact from "./pages/contact/Contact";
import MyList from "./pages/myList/MyList";
import StayDetail from "./pages/stayDetail/StayDetail";
import Stay from "./pages/stay/Stay";
import Footer from "./components/footer/Footer";
import UserCard from "./components/userCard/UserCard";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/activities", element: <Activities /> },
    { path: "/backoffice", element: <Backoffice /> },
    { path: "/contact", element: <Contact /> },
    { path: "/mylist", element: <MyList /> },
    { path: "/stay", element: <Stay /> },
    { path: "/stay/:id", element: <StayDetail /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <UserCard />
      <div className="content">{routes}</div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
