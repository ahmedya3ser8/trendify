import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

import { AuthLayout, MainLayout } from '@/components/layouts';
import { ForgetPassword, Login, Register } from '@/features/auth';
import { AboutUs, Blog, ContactUs, Home } from '@/features/main';
import PublicRoute from './PublicRoute'; 

const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'register', element: <PublicRoute> <Register /> </PublicRoute> },
      { path: 'login', element: <PublicRoute> <Login /> </PublicRoute> },
      { path: 'forget-password', element: <PublicRoute> <ForgetPassword /> </PublicRoute> }
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

const queryClient = new QueryClient();

const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position='top-right' />
    </QueryClientProvider>
  )
}

export default AppRouter;
