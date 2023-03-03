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
                                        <a class="nav-link" href="#">TRANG CHỦ <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="">GIỚI THIỆU KHÓA HỌC</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}
export default NavigationBar;