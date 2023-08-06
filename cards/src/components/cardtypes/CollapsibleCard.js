import React from 'react'

function CollapsibleCard({title, body}) {
    return (
        <div className="card shadow mb-4">
            {/* <!-- Card Header - Accordion --> */}
            <a href="#collapseCardExample" className="d-block card-header py-3" data-bs-toggle="collapse"
                role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
            </a>
            {/* <!-- Card Content - Collapse --> */}
            <div className="collapse show" id="collapseCardExample">
                <div className="card-body">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default CollapsibleCard