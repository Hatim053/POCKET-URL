import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { Provider } from 'react-redux'
import {store }from './app/store.js'
import Dashboard from './pages/Dashboard.jsx'

const routes = createBrowserRouter([
    {
        path : '/',
        element : <App />,
    },
    {
        path : '/login',
        element : <Login />,
    },
    {
        path : '/signup',
        element : <Signup />,
    },
     {
        path : '/dashboard',
        element : <Dashboard />
     },
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
 <RouterProvider router={routes}>
 <App />
 </RouterProvider>
    </Provider>

   
 
)
