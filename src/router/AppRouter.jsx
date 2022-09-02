import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  //const { status, checkAuthToken } = useAuthStore()
  const { status } = useAuthStore()

  // useEffect(() => {
  //   checkAuthToken();
  // }, [])
  

  if (status == "checking") {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};