import React from 'react'

const NewPlat = () => {
    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo al Menu </h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form action="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                            <input type="text" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline"
                                id="name"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewPlat