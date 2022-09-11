import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

export  const Admin:React.FC =():JSX.Element=> {
  return (
    <main className="min-h-screen bg-primary">
      <Helmet>
        <title>Taters | Snackshop</title>
      </Helmet>
      <Header
        activeUrl="SNACKSHOP"
      />
      <Outlet />
      <Footer />
    </main>
  );
}
