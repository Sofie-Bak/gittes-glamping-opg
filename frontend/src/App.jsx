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
      <UserCard/>
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
