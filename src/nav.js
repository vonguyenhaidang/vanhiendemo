import { Link, Outlet } from 'react-router-dom';
function NavigationBar() {
    return (
        <>
            <div class="container p-0">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                            <a class="navbar-brand" href="#"><img src="./images/logo-aptech.png" height="50" width="100" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/">TRANG CHỦ <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/khoahoc">GIỚI THIỆU KHÓA HỌC</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <br />
                </div>
            </div>
            <Outlet />
        </>
    );
}
export default NavigationBar;