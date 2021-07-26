import React, { useContext, useRef } from 'react'
import { FirebaseContext } from '../../firebase'


const Plates = ({ plat }) => {


    let { id, name, image, exist, category, price, description } = plat

    //Existencia ref para acceder al valor direwctament
    const existRef = useRef(plat.exist)

    //contexto de firebase para cambios en la BD
    const { firebase } = useContext(FirebaseContext)

    //Modificar el estado del platillo en firebase
    const updateDisponibility = () => {
        let exist = (existRef.current.value === "true")
        try{
            firebase.db.collection('products').doc(id).update({
                exist
            })
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={image} alt="imagen de platillo" />
                        <div className="sm:flex sm:-mx-2">
                            <label className="block mt-5 sm:w-2/4">
                                <span className="block text-gray-800 mb-2 pl-2">
                                    Existencia
                                </span>
                                <select className="bg-white shadow appearnacce-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    value={exist}
                                    ref={existRef}
                                    onChange={() => updateDisponibility()}
                                >
                                    <option value="true">Disponible</option>
                                    <option value="false">Ocupado</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{name.toUpperCase()}</p>
                        <p className="text-gray-600 mb-4">
                            Categoria: {''}
                            <span className="text-gray-700 font-bold">{category.toUpperCase()}</span>
                        </p>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <p className="text-gray-600 mb-4">
                            Precio: {''}
                            <span className="text-gray-700 font-bold">
                                $ {price}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plates