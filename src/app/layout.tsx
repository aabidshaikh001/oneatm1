"use client";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import AppRoutes from "./approutes";
import ScrollToTop from "./scrolltop";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <HelmetProvider>
        <Helmet>
        
          {/* Global Meta Tags */}
          <title>OneATM - Your Trusted Partner</title>
          <meta
            name="description"
            content="OneATM provides 180+ services, including innovative solutions tailored to your needs."
          />
          <meta name="keywords" content="OneATM, services, solutions, marketing, technology" />
          <meta name="author" content="OneATM Technology Pvt Ltd" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="OneATM - Your Trusted Partner" />
          <meta property="og:description" content="Explore our exceptional services and innovative solutions." />
          <meta property="og:image" content="/path-to-og-image.jpg" />
          <meta property="og:url" content="https://www.oneatm.in/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="OneATM - Your Trusted Partner" />
          <meta name="twitter:description" content="Explore our exceptional services and innovative solutions." />
          <link rel="icon" href="/logox.png" />
        </Helmet>

      <body>
        <Router>
          <ScrollToTop/>
      <Header/>
      <AppRoutes/>

          <Notification/>
          <Footer/>
        </Router>
      </body>
      </HelmetProvider>

    </html>
  );
}
