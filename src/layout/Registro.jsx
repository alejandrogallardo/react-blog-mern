import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { Alerta } from '../components/Alerta';

export const Registro = () => {

    const nuevoRegistro = Yup.object().shape({
        firstName: Yup.string()
                    .min(3, 'El Nombre es muy corto')
                    .max(20, 'El Nombre es muy largo')
                    .required('El Nombre es obligatorio'),
        lastName: Yup.string()
                    .required('El apellido es obligatorio'),
        email: Yup.string()
                    .email('Email no válido')
                    .required('El email es obligatorio'),
        password: Yup.string()
                    // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
                    .min(6, 'El password debe ser de al menos 6 caracteres')
                    .required('El Password es obligatorio')
        
    })

    const handleSubmit = (valores) => {
        console.log('Formilario...', valores);
    }

    return (
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5 mb-5">
            
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}
                validationSchema={nuevoRegistro}
            >
                {({errors, touched}) => {
                //    console.log(errors); 
                    return (
                <Form className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registro de Usuario</h3>
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                        <Field type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nombre de usuario" />
                        {errors.firstName && touched.firstName ? (
                                <Alerta>{errors.firstName}</Alerta>
                            ) : null }
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                        <Field type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Apellido de usuario" />
                        {errors.lastName && touched.lastName ? (
                                <Alerta>{errors.lastName}</Alerta>
                            ) : null }    
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electrónico</label>
                        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nombre@dominio.com" />
                        {errors.email && touched.email ? (
                                <Alerta>{errors.email}</Alerta>
                            ) : null }
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.password && touched.password ? (
                                <Alerta>{errors.password}</Alerta>
                            ) : null }
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarme</button>    
                </Form>
                )}}
            </Formik>

      </div>
    );
};
