import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch man']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategories setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
