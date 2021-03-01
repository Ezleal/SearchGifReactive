import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GetGifs } from './components/GetGifs';

export const ReactSearch = () => {
    const [categories, setCategories] = useState([ 'Rocky' ]);
    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Goku'] );
    // }

    return (
        <>
            <h2>React Search App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {
                categories.map(category => (
                    <GetGifs 
                    key={category}
                    category={category}/>
                ))
            }
        </>
    )
}
