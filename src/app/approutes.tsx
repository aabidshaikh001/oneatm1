"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page";
import Products from "./Products/page";
import Services from "./Services/page";
import Contact from "./Contact/page";
import GetStartedPage from "./Started/page";
import TermsAndConditions from "./TermsAndConditions/page";
import PrivacyPolicy from "./PrivacyPolicy/page";
import RefundCancellationPolicy from "./RefundCancellationPolicy/page";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Started" element={<GetStartedPage />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/RefundCancellationPolicy" element={<RefundCancellationPolicy />} />
   



    </Routes>
  );
};

export default AppRoutes;
