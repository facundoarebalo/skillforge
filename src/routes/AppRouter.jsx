import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import Learn from "../pages/Learn/Learn"
import Lesson from "../pages/Lesson/Lesson"
import Profile from "../pages/Profile/Profile"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </>
    )
}

export default AppRouter