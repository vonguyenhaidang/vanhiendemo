
import FooterBar from "./footer";
import MainPage from "./mainpage";
import NavigationBar from "./nav";
function WebLayout() {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <br></br><br></br>
            <br />
            <div>
                <FooterBar />
            </div>
        </>

    );
}
export default WebLayout;