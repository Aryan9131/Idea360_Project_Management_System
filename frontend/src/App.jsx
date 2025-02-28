import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SignUp';
import Layout from './Components/Layout';
import { HomePage } from './Components/HomePage';
import { AllTasks } from './Components/AllTasks';
import { TaskDetail } from './Components/TaskDetail';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Routes>
            {/* Standalone routes */}
            <Route path="/sign-in" element={<SignIn setToken={setToken} />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected routes */}
            <Route path="/" element={token ? <Layout /> : <Navigate to="/sign-in" />}>
                <Route index element={<HomePage />} />
                <Route path="/all-tasks" element={<AllTasks />} />
                <Route path="/task-detail/:id" element={<TaskDetail />} />
            </Route>
        </Routes>
    );
}

export default App;
