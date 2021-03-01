import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ImagesGifs } from './ImagesGifs';

export const GetGifs = ({category}) => {
    
const { loading } = useFetchGifs();

    return (
<>
    <h3>{category}</h3>
    {loading ? 'Cargando' : 'Carga Finalizada'}
        {/* <div className="card-grid">
            
                {
                    images.map (info => 
                    (
                     <ImagesGifs 
                     key={info.id} 
                     {...info}/>
                    ))
                }
           
        </div> */}
        </>
    )
}
