'use client'

import React, { useEffect, useState } from 'react'
import { LoginButton, LoginInput } from '@/ui-components/StyledComponents'
import { Key } from '@mui/icons-material'
import { Box, Divider, InputAdornment, Typography } from '@mui/material'
import Link from 'next/link'
import { useFormik } from 'formik'
import { getIcon, resetPassword } from '@/services/client-side/authServices'

function ResetPasswordPage() {

    const [codeParam, setCodeParam] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [okMessage, setOkMessage] = useState(false);
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        getIcon()
        .then(data => {
            setIconUrl(data.data.attributes.Icon.data.attributes.url);
        })
        .catch(err => console.log(err));
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setCodeParam(urlParams.get('code'));
    }, [])

    const formik = useFormik({
        initialValues: { passwordConfirmation: "", password: ""},
        onSubmit: async (values) => {
            resetPassword({
                code: codeParam,
                password: values.password,
                passwordConfirmation: values.passwordConfirmation
            })
            .then( (data) => {
                console.log('contraseña reestablecida', data);
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
            case 'password is a required field': 
                return 'Debe ingresar una contraseña';
            case 'passwordConfirmation is a required field': 
                return 'Debe confirmar su contraseña';
            case 'Passwords do not match': 
                return 'Las contraseñas no coinciden';
            case '2 errors occurred': 
                return 'Debe rellenar los campos';
            case 'Incorrect code provided': 
                return 'La contraseña ya fue reestablecida';
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
                    paddingBottom: 'calc(5% + 50px)',
                    width: {xs: '90%', md:'50%'},
                    boxShadow: '0px 4px 24px rgba(0,0,0,0.2)',
                    backgroundColor: '#131313',
                    borderRadius: '20px',
                    zIndex: '10'
                }}
            >
                {
                    iconUrl
                    ?
                    <img className='login_icon' alt="icon" src={`${iconUrl}`}/>
                    : 
                    null
                }
                <Typography
                    sx={{
                        fontSize: {xs: '22px', md: '28px'},
                        fontWeight: '700',
                        paddingTop: '5%',
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
                        placeholder='Contraseña'
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        disableUnderline={true}
                        value={formik.values.password}
                        startAdornment={
                            <InputAdornment position='start'>
                                <Key sx={{color: '#c4c4c4', marginLeft: '16px'}}/>
                            </InputAdornment>
                        }
                    />
                    <LoginInput
                        placeholder='Confirmar contraseña'
                        name="passwordConfirmation"
                        type="password"
                        onChange={formik.handleChange}
                        disableUnderline={true}
                        value={formik.values.passwordConfirmation}
                        startAdornment={
                            <InputAdornment position='start'>
                                <Key sx={{color: '#c4c4c4', marginLeft: '16px'}}/>
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
                            Contraseña reestablecida
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
                    >Reestablecer</LoginButton>
                </Box>
                <Link href={"/"} style={{textDecoration: 'none'}}>
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
                        Iniciar sesión
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default ResetPasswordPage
