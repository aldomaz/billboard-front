'use client';

import { PrimaryInput , PrimaryButton, LoginInput, LoginButton } from '@/ui-components/StyledComponents';
import { Box, Divider, InputAdornment, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { authLogin, getLogin } from '@/services/client-side/authServices';
import { useEffect, useState } from 'react';
import { AccountCircle, Mail } from '@mui/icons-material';
import LoginCarousel from './LoginCarousel';
import Loading from '@/app/components/Loading';
import Link from 'next/link';
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const Login = () => {

    const router = useRouter();
    const [loginData, setLoginData] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogin()
        .then(data => setLoginData(data))
        .catch(err => console.log(err))
        document.documentElement.style.setProperty('--background', '#EEEEEE');
    }, [])

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: async (values) => {
            setLoading(true);
            authLogin({
                identifier: values.email,
                password: values.password
            })
            .then( (data) => {
                sessionStorage.setItem("token", data.jwt);
                router.push(`/news`);
                setErrorMessage(null)
            })
            .catch( (error) => {
                setErrorMessage(error.response.data.error.message);
                console.log(error.response.data);
            })
            .finally(setLoading(false));
        },
    });

    const validationErrors = (msg) => { 
        switch(msg){
            case 'Invalid identifier or password': 
                return 'Email o contraseña inválida';
            case '2 errors occurred': 
                return 'Ingrese el email y contraseña';
            case 'password is a required field':
                return 'Debe ingresar la contraseña';
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
                    width: '85%',
                    height: '65%',
                    boxShadow: '0px 4px 24px rgba(0,0,0,0.2)',
                    borderRadius: '20px'
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: {xs: '100%', md: '60%'},
                        justifyContent: 'center',
                        border: '2px solid #131313',
                        textAlign: 'center',
                        backgroundColor: '#131313',
                        borderTopLeftRadius: '20px',
                        borderBottomLeftRadius: '20px',
                        borderTopRightRadius: {xs: '20px', md: '0px'},
                        borderBottomRightRadius: {xs: '20px', md: '0px'}
                    }}
                >
                    <img className='login_icon' alt="icon" src={`${serverUrl}${loginData?.data.attributes.Icon.data.attributes.url}`}/>
                    <Typography
                        sx={{
                            fontSize: {xs: '24px', md: '28px', lg: '32px'},
                            fontWeight: '700',
                            color: '#3fff9c',
                            margin: {xs: '8px 16px', sm: '8px 64px'},
                        }}
                    >Ingresa con tu email</Typography>
                    <Divider
                        sx={{
                            border: '3px solid #3fff9c',
                            width: '50px',
                            borderRadius: '10px',
                            margin: '16px 0',
                            alignSelf: 'center'
                        }}
                    />
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                margin: {xs: '8px 16px', sm: '8px 64px'},
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'center',
                            }}
                        >
                            <LoginInput
                                placeholder='Email'
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                disableUnderline={true}
                                startAdornment={
                                    <InputAdornment position='start'>
                                    <AccountCircle sx={{color: '#c4c4c4', marginLeft: '16px'}} />
                                    </InputAdornment>
                                }
                            />
                            <LoginInput
                                placeholder='Contraseña'
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                disableUnderline={true}
                                value={formik.values.password}
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
                            <LoginButton 
                                type="submit"
                                sx={{
                                    width: '70%',
                                    marginTop: '16px',
                                    fontWeight: 'bold'
                                }}
                            >INGRESAR</LoginButton>
                        </Box>
                    </form>
                    <Link href={"/login/forgot-password"} style={{textDecoration: 'none'}}>
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
                            Olvidé mi contraseña
                        </Typography>
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        width: '40%',
                        backgroundColor: '#3fff9c',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                    }}
                >
                    {
                        loading
                        ?
                            <Loading/>
                        :
                            <LoginCarousel data={loginData?.data.attributes.layouts.data}/>
                    }
                </Box>
            </Box>
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '16px',
                    color: '#888',
                    fontSize: '14px'
                }}
            >
                Billboard
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '16px',
                    color: '#888',
                    fontSize: '14px'
                }}
            >
                ®MUSS Multi User Software Solutions
            </Typography>
        </Box>
    );
};

export default Login;