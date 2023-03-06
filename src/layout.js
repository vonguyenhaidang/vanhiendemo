import CourseIntro from "./course";
import Courses from "./coursecard";
import FooterBar from "./footer";
import NavigationBar from "./nav";
import RegistrationAndVideo from "./res_vid";
import Rewards from "./rewards";
import SlideShow from "./slideshow";
import Teachers from "./teachers";
function WebLayout() {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <br></br><br></br>
            <div>
                <SlideShow />
            </div>
            <br></br>
            <div>
                <RegistrationAndVideo />
            </div>
            <br></br>
            <div>
                <CourseIntro />
            </div>
            <br />
            <div>
                <Courses />
            </div>
            <br />
            <div>
                <Teachers />
            </div>
            <br />
            <div>
                <Rewards />
            </div>
            <br />
            <div>
                <FooterBar />
            </div>
        </>

    );
}
export default WebLayout;