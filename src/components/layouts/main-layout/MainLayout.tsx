import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header, Footer } from '@/components/common';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default MainLayout;
