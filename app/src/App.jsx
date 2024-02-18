import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Root from "./components/Root"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<About />}/>
        <Route path="/projects"element={<Projects/> }/>
        <Route path="/resume"element={<Resume/> }/>
        <Route path="/contact"element={<Contact/> }/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
