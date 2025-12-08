import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@/components/layouts';
import { ForgetPassword, Login, Register } from '@/features/auth';
import { AboutUs, Blog, ContactUs, Home } from '@/features/main';

const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'forget-password', element: <ForgetPassword /> }
    ]
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'blog', element: <Blog /> },
    ]
  }
])

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
