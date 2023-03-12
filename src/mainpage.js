import RegistrationAndVideo from "./res_vid";
import Rewards from "./rewards";
import SlideShow from "./slideshow";
import Teachers from "./teachers";
import CourseIntro from "./course";
import Courses from "./coursecard";
function MainPage() {
    return (
        <>
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
        </>
    );
}
export default MainPage;