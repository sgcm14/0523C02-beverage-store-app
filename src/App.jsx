import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";

function App() {
  return (
    <>
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.contact} element={<Contacto />} />
      <Route path={routes.beer+"/:id"} element={<Beer />} />
      <Route
        path={routes.notFound}
        element={<h1>Error 404 - Page not Found</h1>}
      />
    </Routes>
  </>
  )
}

export default App
