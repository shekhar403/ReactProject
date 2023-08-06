import React from 'react'

function DefaultCard({title, body}) {
    return (
        <div className="card mb-4">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {body}
            </div>
        </div>
    )
}

export default DefaultCard