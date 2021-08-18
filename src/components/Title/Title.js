import React from 'react'

//TAKES TWO THINGS AS PROPS
export default function Title({name, title}) {
    return (
        <div className="auto-cols-auto m-2 text-center">
            <h1 className="capitalize font-bold font-serif text-3xl text-white">{name}{title}</h1>
        </div>
    )
}
