import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  IconButton,
  Input,
  InputBase,
  InputLabel,
  Modal,
  Radio,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const SectionContainer = styled(Box)(({ theme }) => ({
  marginInline: '15%',
  marginBottom: '16px',
  [theme.breakpoints.down('lg')]: {
    marginInline: '5%',
  },
  [theme.breakpoints.down('md')]: {
    marginInline: '32px',
  }
}))

export const PrimaryButton = styled(Button)(({ theme }) => ({
  width: '244px',
  height: '60px',
  borderRadius: '30px',
  backgroundColor: '#3fff9c',
  color: '#000',
  textTransform: 'none',
  fontSize: '18px',
  fontWeight: 'normal',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    width: '50%',
    fontWeight: 'bold',
    margin: '64px 0',
  },
  '&:hover': {
    backgroundColor: '#00cb6d',
  }
}))

export const LoginButton = styled(Button)(({ theme }) => ({
  width: '244px',
  height: '60px',
  borderRadius: '30px',
  color: '#3fff9c',
  border: '2px solid #3fff9c',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'normal',
  [theme.breakpoints.down('md')]: {
    width: '50%',
    fontWeight: 'bold',
  },
  '&:hover': {
    backgroundColor: '#3fff9c',
    color: '#131313',
  }
}))

export const NewsModalContainer = styled(Modal)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const NewsModal = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#131313',
  width: '50vw',
  height: '90vh',
  borderRadius: '20px',
  boxShadow: '-4px -4px rgba(84,104,110,0.4)',
  [theme.breakpoints.down('lg')]: {
    width: '70vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  }
}))

export const MediaModalContainer = styled(CardMedia)(() => ({
  height: '40%',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  objectFit: 'cover'
}))

export const ContentModalContainer = styled(Box)(({ theme }) => ({
  padding: '0 64px',
  color: '#fff',
  height: '56%',
  overflowY: 'auto',
  [theme.breakpoints.down('lg')]: {
    padding: '0 32px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
  }
}))

export const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: 50,
  color: '#FFF',
  background: '#13131354',
  '&:hover': {
    background: '#131313a8',
  }
}))

export const NewsModalTitle = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 700,
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3vw',
  }
}))

export const NewsModalDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.8vw',
  backgroundColor: '#3fff9c',
  borderRadius: '10px',
  textAlign: 'center',
  width: '6vw',
  fontWeight: '500',
  margin: '16px 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    width: '100px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    width: '80px',
  }
}))

export const NewsModalSubtitle = styled(Typography)(({ theme }) => ({
  padding: '16px 0',
  fontSize: '24px',
  fontWeight: 500,
  fontStyle: 'italic',
  color: '#3fff9c',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5vw',
  }
}))

export const NewsModalContent = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  wordSpacing: '1px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2vw',
  }
}))

export const PrimaryInputLabel = styled(InputLabel)(() => ({
  marginLeft: '8px',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  color: '#fff'
}))

export const PrimaryInput = styled(InputBase)(() => ({
  width: '100%',
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    border: '1px solid #c4c4c4',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    backgroundColor: '#232323',
    color: '#fff',
    lineHeight: '24px',
    letterSpacing: '0.1px',
    padding: '12px 16px',
    height: '35px',
  }
}))

export const LoginInput = styled(Input)(() => ({
  width: '100%',
  border: '1px solid #c4c4c4',
  borderRadius: '8px',
  backgroundColor: '#232323',
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    color: '#fff',
    lineHeight: '24px',
    letterSpacing: '0.1px',
    padding: '12px 16px',
    height: '35px',
  },
  '&:hover': {
    border: '1px solid #3fff9c',
  }
}))

export const StyledRadio = styled(Radio)(() => ({
  color: '#c4c4c4',
  marginLeft: '8px',
  '&:hover': {
    color: '#3fff9c',
  },
  '&.Mui-checked': {
    color: '#3fff9c',
  }
}))

export const StyledCheckBox = styled(Checkbox)(() => ({
  color: '#3fff9c',
  '&:hover': {
    color: '#3fff9c',
  },
  '&.Mui-checked': {
    color: '#3fff9c',
  }
}))
