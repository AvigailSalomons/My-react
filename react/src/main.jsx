import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// ייבוא קומפוננטות
import Admin from './Components/admin/Admin';
import ContactUs from './Components/ContactUs';
import Calander from './Components/calander/Calander';
import App from './Components/App';

// הגדרת הנתיבים
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: '/contact-us', // שם הנתיב מתוקן לכתיבה נכונה
    element: <ContactUs />, // הצגת ContactUs בקומפוננטה זו
    children: [
     
    ],
  },
  {
    path: '/calendar',
    element: <Calander />,
    errorElement: <div>Error loading calendar</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>Admin page not found</div>,
  },
]);

// רינדור האפליקציה
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
