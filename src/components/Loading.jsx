import React from "react";


const Loading = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-grow text-warning" role="status" >
                        <span className="visually-hidden"> Loading...</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Loading;