import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Faq, Contact } from "./pages";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>,
  ),
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
