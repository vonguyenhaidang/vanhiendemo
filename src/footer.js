function FooterBar() {
    return (
        <>
            <footer class="text-center text-lg-start bg-white text-muted footerAtt">
                <section class="">
                    <div class="container-fluid text-center text-md-start mt-5">
                        <div class="row mt-12">
                            <div class="col-md-8 col-lg-6 col-xl-5 mx-auto text-left">
                                <h6 class="text-uppercase fw-bold mb-4 compName">
                                    Hệ thống lập trình viên Aptech Saigon
                                </h6>
                                <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i> Lầu 1, 102 Nguyễn Đình Chính, Phường 15,
                                    Quận Phú Nhuận, TP Hồ
                                    Chí Minh
                                </p>
                                <p>
                                    <i class="fa fa-envelope"></i> tuvan@aptechsaigon.edu.vn
                                </p>
                                <p>
                                    <i class="fa fa-phone"></i> 098.778.2201 - 096.6600.539
                                </p>
                            </div>
                            <div class="col-md-8 col-lg-6 col-xl-4 mx-auto mb-4 text-left ">
                                <div>
                                    <button class="btn btn-danger"><i class="fa-brands fa-facebook-f"></i>
                                        &nbsp;Facebook</button>&nbsp;
                                    <button class="btn btn-danger"><i class="fa-brands fa-twitter"></i>
                                        &nbsp;Twitter</button>&nbsp;
                                    <button class="btn btn-danger"><i class="fa-brands fa-youtube"></i>
                                        &nbsp;Youtube</button>&nbsp;
                                </div>
                                <p style={{ margin: "10px" }}></p>
                                <div><button class="btn btn-danger"><i class="fa-brands fa-instagram"></i>
                                    &nbsp;Instagram</button>&nbsp;
                                    <button class="btn btn-danger"><i class="fa-brands fa-pinterest"></i>
                                        &nbsp;Pinterest</button>&nbsp;
                                    <button class="btn btn-danger"><i class="fa-brands fa-flickr"></i>
                                        &nbsp;Flickr</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
            </footer>
        </>
    );
}
export default FooterBar;