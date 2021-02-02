import React from 'react'

export default function Title({name,title,ListOrProdcut}) {
    if(ListOrProdcut == "list"){
        return (
            <div className="row">
                <div className = "col-10 mx-auto my-2 text-center text-title">
                    <h2 className = "text-capitalize font-weight-bold">
                        {name}<strong className="text-blue">
                            {title}
                        </strong>
                    </h2>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="row">
                <div className = "col-10 mx-auto my-2 text-center text-title">
                    <h6 className = "text-capitalize font-weight-bold">
                        {name}<strong className="text-blue"><br></br>
                            {title}
                        </strong>
                    </h6>
                </div>
            </div>
        )

    }
    
}
