import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'

const Menu = () => {

    const [plates, savePlates] = useState([])
    const { firebase } = useContext(FirebaseContext)
    useEffect(() => {
        const getPlates = () => {
            firebase.db.collection('products').onSnapshot(handleSnap) //Metodo para tener resultados en real time
        }
        getPlates()
    }, [])
    //Obtener los datos de firebas en tiempo real
    function handleSnap(s) {
        let plates = s.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        console.log(plates)
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Menu</h1>
            <Link to="/nuevo-paltillo" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold rounded-full">
                Agregar Nuevo Platillo
            </Link>
        </>
    )
}

export default Menu