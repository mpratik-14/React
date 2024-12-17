import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, About, Contact, User, Github, githubInfoLoader } from './components/index.js'
import Routes from './Routes.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Routes />,
//     children: [
//       {
//         path:  "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Routes />}>
      <Route index element={<Home />} /> {/* Use `index` for default child route */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
      loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
