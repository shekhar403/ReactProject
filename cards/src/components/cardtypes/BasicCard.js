import React from 'react'

function BasicCard({title, body}) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
            </div>
            <div className="card-body">
                {body}
            </div>
        </div>
    )
}

export default BasicCard