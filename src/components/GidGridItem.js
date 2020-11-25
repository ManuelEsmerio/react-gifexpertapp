import React from 'react'

export const GidGridItem = ({ id, title, url }) => {

    const card = {
        marginBottom: '25px'
    }

    return (

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={ card }>
            <div className="card shadow " key={ id }>
                <img className="card-img-top" src={ url } alt={ title} />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
        
    )
}
