import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NewPlat = () => {

    //Validacion del formulario
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            category: '',
            image: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'Los platillos deben tener al menos 3 caracteres').required('El nombre del platillo es obligatorio'),
            price: Yup.number().min(1, 'Debes de agrgar un numero').required('El precio es obligatorio'),
            category: Yup.string().required('La categoria es oblifatoria'),
            description: Yup.string().min(10, 'La descripcion debe de ser ms larga').required('La descripcion es obligatoria')
        }),
        onSubmit: data => console.log(data)
    })

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo al Menu </h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                            <input type="text"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline"
                                id="name"
                                placeholder="Pizza, Tacos, Ensalada Cesar..."
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {
                            formik.touched.name && formik.errors.name ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error</p>
                                    <p>{formik.errors.name}</p>
                                </div>
                            ): null
                        }
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Precio</label>
                            <input type="number"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline"
                                id="price"
                                placeholder="$100"
                                min="0"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {
                            formik.touched.price && formik.errors.price ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error</p>
                                    <p>{formik.errors.price}</p>
                                </div>
                            ) : null
                        }
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Categoria</label>
                            <select
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline"
                                id="category"
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">---Seleccione---</option>
                                <option value="Desayuno">Desayuno</option>
                                <option value="Comida">Comida</option>
                                <option value="Cena">Cena</option>
                                <option value="Bebida">Bebida</option>
                                <option value="Postre">Postre</option>
                                <option value="Ensalada">Ensalada</option>
                            </select>
                        </div>
                        {
                            formik.touched.category && formik.errors.category ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error</p>
                                    <p>{formik.errors.category}</p>
                                </div>
                            ) : null
                        }
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Imagen</label>
                            <input type="file"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline"
                                id="image"
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Descripcion</label>
                            <textarea type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus:shadow-outline h-40"
                                id="description"
                                placeholder="Un platillo hecho con..."
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </textarea>
                        </div>
                        {
                            formik.touched.description && formik.errors.description ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error</p>
                                    <p>{formik.errors.description}</p>
                                </div>
                            ) : null
                        }
                        <button type="submit" className="bg-blue-800 hover:bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold rounded-full">Crear</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewPlat