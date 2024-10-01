import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Lazy load the SignIn component
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/SignIn" />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
