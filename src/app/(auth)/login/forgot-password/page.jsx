'use client'

import { LoginButton, LoginInput } from "@/ui-components/StyledComponents"
import { Mail } from "@mui/icons-material"
import { Box, Divider, InputAdornment, Typography } from "@mui/material"
import { useFormik } from 'formik';
import { forgotPassword } from "@/services/client-side/authServices";
import Link from "next/link";
import { useState } from "react";

function ForgotPasswordPage() {

    const [errorMessage, setErrorMessage] = useState(null);
    const [okMessage, setOkMessage] = useState(false);

    const formik = useFormik({
        initialValues: { email: ""},
        onSubmit: async (values) => {
            forgotPassword({
                email: values.email,
            })
            .then( (data) => {
                console.log('email enviado', data);
                setOkMessage(data.ok);
                setErrorMessage(null);
            })
            .catch( (error) => {
                setErrorMessage(error.response.data.error.message);
                setOkMessage(false);
                console.log(error.response.data);
            });
        },
    });

    const validationErrors = (msg) => { 
        switch(msg){
            case 'email is a required field': 
                return 'Ingrese un email para continuar';
            case 'email must be a valid email': 
                return 'Debe ingresar un email válido';
            case '2 errors occurred': 
                return 'Ingrese el email y contraseña';
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                margin: {xs: 0, md: '0 10%', xl: '0 15%'},
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: '#fff',
            }}
        >   
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '5% 0',
                    width: {xs: '90%', md:'50%'},
                    boxShadow: '0px 4px 24px rgba(0,0,0,0.2)',
                    backgroundColor: '#131313',
                    borderRadius: '20px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: {xs: '22px', md: '28px'},
                        fontWeight: '700',
                        color: '#3fff9c',
                    }}
                >Restablecer contraseña</Typography>
                <Divider
                    sx={{
                        border: '3px solid #3fff9c',
                        width: '50px',
                        borderRadius: '10px',
                        margin: '16px 0',
                        alignSelf: 'center'
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: {xs: '90%', sm:'70%'},
                        gap: '16px',
                        margin: '16px 0',
                        alignItems: 'center',
                    }}
                >
                    <LoginInput
                        placeholder='Email'
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        disableUnderline={true}
                        value={formik.values.email}
                        startAdornment={
                            <InputAdornment position='start'>
                                <Mail sx={{color: '#c4c4c4', marginLeft: '16px'}}/>
                            </InputAdornment>
                        }
                    />
                    {
                        errorMessage 
                        ? 
                        <Typography
                            sx={{
                                color: '#f53838',
                                fontSize: '12px',
                            }}
                        >
                            {validationErrors(errorMessage)}
                        </Typography>
                        : null
                    }
                    {
                        okMessage 
                        ? 
                        <Typography
                            sx={{
                                color: '#3fff9c',
                                fontSize: '12px',
                            }}
                        >
                            Email enviado correctamente
                        </Typography>
                        : null
                    }
                    <LoginButton 
                        onClick={formik.handleSubmit}
                        sx={{
                            width: '70%',
                            marginTop: '16px',
                            fontWeight: 'bold'
                        }}
                    >Enviar Email</LoginButton>
                </Box>
                <Link href={"/login"} style={{textDecoration: 'none'}}>
                    <Typography
                        sx={{
                            color: '#888',
                            fontSize: '14px',
                            '&:hover':{
                                textDecoration: 'underline',
                                color: '#3fff9c'
                            }
                        }}
                    >
                        Volver
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default ForgotPasswordPage
