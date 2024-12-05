"use client";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import AppRoutes from "./approutes";
import ScrollToTop from "./scrolltop";

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>One ATM - One Nation, One Payment - AEPS, Money Transfer, UPI</title>
        <meta
          name="description"
          content="One ATM offers seamless AEPS, money transfer, UPI, and more payment solutions for a cashless India. Experience a unified, secure, and efficient payment system."
        />
        <meta
          name="keywords"
          content="One ATM, One Nation One Payment, AEPS, Money Transfer, UPI, Payment Solutions, Secure Payments"
        />
        <meta name="author" content="One ATM Technology Pvt Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="One ATM - One Nation, One Payment - AEPS, Money Transfer, UPI"
        />
        <meta
          property="og:description"
          content="One ATM offers seamless AEPS, money transfer, UPI, and more payment solutions for a cashless India."
        />
        <meta property="og:image" content="/logox.png" />
        <meta property="og:url" content="https://www.oneatm.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="One ATM - One Nation, One Payment - AEPS, Money Transfer, UPI"
        />
        <meta
          name="twitter:description"
          content="One ATM offers seamless AEPS, money transfer, UPI, and more payment solutions for a cashless India."
        />
        <meta name="twitter:image" content="/path-to-your-twitter-image.jpg" />

        <link rel="icon" href="/logox.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/logox.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/logox.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logox.png" />

    
      </head>

      <body>
        <Router>
          <ScrollToTop />
          <Header />
          <AppRoutes />
          <Notification />
          <Footer />
        </Router>
      </body>
    </html>
  );
}