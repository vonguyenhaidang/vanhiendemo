function RegistrationAndVideo() {
    return (
        <>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-5">
                    <div class="video-wrapper">
                        <iframe width="560" class="responsive-iframe" height="auto"
                            src="https://www.youtube.com/embed/g_fc8mLd3fw?controls=0" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-3">
                    <form class="pt-0 pb-4 m-1 border">
                        <h5 class="text-center card-header bg-danger text-white">Đăng ký tư vấn miễn phí</h5>
                        <div class="form-group pl-4 pt-2 pr-4">
                            <label for="exampleInputEmail1">Họ tên <strong style={{ color: "#b32400" }}>**</strong></label>
                            <input type="email" class="form-control" id="exampleNameInput" aria-describedby="nameHelp" />
                        </div>
                        <div class="form-group pl-4 pr-4">
                            <label for="exampleInputEmail1">Điện thoại <strong style={{ color: "#b32400" }}>**</strong></label>
                            <input type="email" class="form-control" id="exampleTelephoneNumber" aria-describedby="teleHelp" />
                        </div>
                        <div class="form-group pl-4 pr-4">
                            <label for="exampleInputEmail1">Email <strong style={{ color: "#b32400" }}>**</strong></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group pl-4 pr-4">
                            <button type="submit" class="btn btn-danger"><i class="fas fa-paper-plane"></i> Đăng
                                ký</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default RegistrationAndVideo;