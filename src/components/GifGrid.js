import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GidGridItem } from './GidGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );
    const spinner = {
        width: '3rem',
        height: '3rem'
    }

    return (
        <>
            <h3> { category } </h3>

            { loading &&
                <div className="spinner-grow " style={ spinner } role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            
            <div className="container">
                <div className="row">
                    {
                        data.map( img => (
                            <GidGridItem key={ img.id }  {...img } />
                        ))
                    }
                </div>
            </div>
            
        </>
    )
}
