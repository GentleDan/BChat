import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./providers/auth/AuthProvider.tsx";
import { Login } from "./features/auth/Login.tsx";
import { Registration } from "./features/auth/Registration.tsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
