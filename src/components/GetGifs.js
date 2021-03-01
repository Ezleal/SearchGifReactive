// import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ImagesGifs } from './ImagesGifs';

export const GetGifs = ({category}) => {
    
const { loading, data} = useFetchGifs( category );

    return (
<>
    <h3 className="card animate__animated animate__flip animate__delay-2s ">{category}</h3>
        { loading && <p className="card animate__animated animate__flash">Loading</p>}

        <div className="card-grid">
            
                {
                    data.map (info => 
                    (
                     <ImagesGifs 
                     key={info.id} 
                     {...info}/>
                    ))
                }
           
        </div>
        </>
    )
}
