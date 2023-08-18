import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificates from "./components/Certificates/Certificates";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/certificates", element: <Certificates /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Container maxW={"90%"} className="App">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
