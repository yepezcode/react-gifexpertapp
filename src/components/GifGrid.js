import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem'
export const GifGrid = ({ category }) => {
    
    const { data: images, loading } = useFetchGifts( category );

    return (
        <div className="card animate__animated animate__backInLeft" >
           
            <h3> { category } </h3>
            <div className="card-grid">                    
                
                { loading && <p> Loading... </p> }
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            {
                            ...img
                            }
                        />
                    ))
                }
            </div>
     </div>
    )
}
