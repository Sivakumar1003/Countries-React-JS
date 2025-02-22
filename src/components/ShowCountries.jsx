import React from 'react'
import Card from './Card'

export default function ShowCountries({ resultCountries }) {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-[90%] m-auto py-6 items-center">
            {
                resultCountries &&
                resultCountries.map(country => {
                    return <Card key={country["name"]["common"]} country={country} />
                })
            }
        </div>
    )
}