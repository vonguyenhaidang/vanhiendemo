import { useEffect, useState } from 'react';

function Teachers() {
    const [list, setList] = useState([]);
    useEffect(() => {

        fetch(`/teachers.json`)
            .then(response => response.json())
            .then(data => { setList(data.teachers_source) });

    }, []);
    return (

        <>
            <div class="row">
                <div class="container">
                    <div class="col-md-12 comDesc">
                        <p>ĐỘI NGŨ GIẢNG VIÊN</p>
                    </div>
                    <br />
                    <div class="card-deck">
                        {list.map(item =>
                            <div class="col-md-6">
                                <div class="card p-3 bg-white rounded h-100">
                                    <div class="row card-body">
                                        <img class="col-sm-6" src={item.image} alt="sans" height="100%" width="100%" />
                                        <div class="col-sm-6">
                                            <h4 class="card-title headIcon">{item.name}</h4>
                                            <p class="card-text">{item.chuyenmon}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Teachers;