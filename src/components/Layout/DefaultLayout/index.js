import Header from '~/components/Layout/components/Header/header';
import SideBar from '~/components/Layout/components/SideBar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
