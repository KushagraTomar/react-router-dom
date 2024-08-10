import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/github";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="github" element={<Github />} />
          <Route path="user/:userId" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
