import React from 'react';
import "./cancel.css";
function Cancel(){
    return (
        <div className="container-fluid p-0 mt-5.5rem" >
         <div className="container mm">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 ">
                    <div className="card box-shadow-lg bg-white" id="card" >
                        <div>
                            <h4 className="mb-4 mt-5" id="signin">Oops payment got cancelled</h4>
                            <div className="suc">
                                <img src="https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484_960_720.png" className="img-responsive"></img>
                                                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cancel;