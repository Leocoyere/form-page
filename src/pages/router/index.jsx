import { Routes, Route } from "react-router-dom";
import Login from "../login"
import Register from "../register"

export default function Router() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}