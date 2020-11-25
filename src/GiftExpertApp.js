import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } />
                    ))
                }
            </ol>
        </>
    )
}
