import React from 'react'

function ProjectDetails(props) {
    const id=props.match.params.id
    console.log(props);
    return (
        <div className="container project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title-{id}</span>
                    <p>
                        Nulla excepteur amet labore occaecat laborum ullamco deserunt enim veniam. Ullamco dolor ad enim laboris in velit fugiat. Magna in quis nostrud laboris duis dolor consectetur amet ipsum aliqua officia. Tempor voluptate do officia aute ea eu Lorem. Dolore nisi in id ullamco cillum cillum non id ad.
                    </p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by net ninjs </div>
                    <div>2 nd semptember 2 am</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
