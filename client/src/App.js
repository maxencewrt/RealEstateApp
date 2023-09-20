import Auth from "./components/Auth"
import Sidebar from "./components/Sidebar"
import Breadcrumbs from './components/Breadcrumb'; 

import Dashboard from "./pages/Dashboard"
import Properties from "./pages/Properties"
import Bank from "./pages/Bank"
import Travaux from "./pages/Travaux"
import Attachements from "./pages/Attachements"
import Contracts from "./pages/Contracts"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

import { useCookies } from 'react-cookie'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Flowbite } from 'flowbite-react';

import DefaultFooter from "./components/footer-flow"

const App = () => {
  const [cookies] = useCookies(null)
  const authToken = cookies.AuthToken

  return (
    <div class="dark:bg-gray-900 h-screen">
      {!authToken && <Auth />}
      {authToken && (<>
        <Flowbite >
          <div class="dark:bg-gray-900">
            <BrowserRouter>
              <Sidebar />
              <div class="p-4 sm:ml-64">
                <div class="p-4 mt-14">
                <Breadcrumbs/>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Properties" element={<Properties />} />
                    <Route path="/Contracts" element={<Contracts />} />
                    <Route path="/Bank" element={<Bank />} />
                    <Route path="/Travaux" element={<Travaux />} />
                    <Route path="/Attachements" element={<Attachements />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <DefaultFooter />
              </div>
            </BrowserRouter>
          </div>
        </Flowbite>
      </>
      )}
    </div>
  )
}

export default App
