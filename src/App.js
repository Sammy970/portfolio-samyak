import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./pages/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificates from "./pages/Certificates";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
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
