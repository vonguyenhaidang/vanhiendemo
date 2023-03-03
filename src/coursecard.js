import { useEffect, useState } from 'react';
function Courses() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`/courses.json`)
            .then(response => response.json())
            .then(data => { setList(data.course_infor) });

    }, []);
    return (
        <>
            <div class="row">
                <br />
                <div class="container">
                    <div class="col-md-12 comDesc">
                        <p>CHƯƠNG TRÌNH ĐÀO TẠO</p>
                    </div>
                    <br />
                    <div class="card-deck">
                        {list.map(item =>
                            <div class="card">
                                <img class="card-img-top" src={item.image} alt="sans" height="100%" width="40%" />
                                <div class="card-body">
                                    <h4 class="card-title courseHeader">{item.name}</h4>
                                    <p class="card-text">{item.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}
export default Courses;