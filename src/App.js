import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes';
import { DefaultLayout } from './components/Layout';
import { ToastContainer, toast } from "react-toastify";
function App() {

    toast.clearWaitingQueue({ containerId: "app-notifications" });

    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <ToastContainer
                position="bottom-right"
                draggable={false}
                autoClose={3000}
                limit={1}
                pauseOnHover={false}
                closeOnClick={true}
                newestOnTop={true}
                containerId="app-notifications"
            />

        </Router>
    );
}

export default App;
