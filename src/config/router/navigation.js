/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Orders,
  DeliverDocuments,
  BusinessMode,
  VerifyMode,
  Bank_details,
  SupportTicketsForm,
  PDFGenerator,
} from "../../pages";
const RouterNavigation = () => {
  let token = localStorage.getItem("Agent_access_token");
  const isAuthenticated = token ? true : false
  console.log(isAuthenticated, "isAuthenticated")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deliver-documents"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DeliverDocuments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bank_details"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Bank_details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business-mode"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BusinessMode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify-job"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <VerifyMode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support-ticket"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SupportTicketsForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Setting />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
