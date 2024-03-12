import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyleComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { userNameValidator } from '../utils/validators';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => { setIsLogin((prev) => !prev) }

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const userName = useInputValidation("", userNameValidator);
    const password = useInputValidation();

    const avatar = useFileHandler("single",)

    const hanleLogin = (event) => {
        event.preventDefault();
    }
    const hanleSignUp = (event) => {
        event.preventDefault();
    }

    return (
        <div style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5))"}}>
            <Container Component={'main'} maxWidth='xs' sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Paper elevation={3} sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    {
                        isLogin ? (
                            <>
                                <Typography variant='h5'>Login</Typography>
                                <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={hanleLogin}>
                                    <TextField required fullWidth label="Username" margin="normal" variant='outlined' value={name.value} onChange={name.changeHandler} />
                                    <TextField required label="Password" fullWidth type="password" margin="normal" variant='outlined' value={password.value} onChange={password.changeHandler} />
                                    <Button sx={{ marginTop: "1rem", }} fullWidth variant="contained" color="primary" type="submit">Login</Button>
                                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                    <Button fullWidth variant="text" color="secondary" onClick={toggleLogin}>
                                        Login in
                                    </Button>
                                </form>
                            </>) : (<>
                                <Typography variant='h5'>Sign Up</Typography>
                                <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={hanleSignUp}>
                                    <Stack position={'relative'} width={'10rem'} margin={'auto'}><Avatar
                                        sx={{
                                            width: "10rem"
                                            , height: '10rem',
                                            objectFit: 'contain'

                                        }} src={avatar.preview} />

                                        <IconButton sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: '0',
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            "hover": {
                                                bgcolor: "rgba(0,0,0,0.7)",
                                                color: "black",

                                            },
                                        }}
                                            component="label"
                                        >
                                            <>
                                                <CameraAltIcon />
                                                <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                            </>
                                        </IconButton>
                                    </Stack>
                                    {
                                        avatar.error && (
                                            <Typography m={'1rem auto'} width={'fit-content'} display={'block'} color="error" variant='caption'>
                                                {avatar.error}
                                            </Typography>
                                        )
                                    }
                                    <TextField required fullWidth label="Name" margin="normal" variant='outlined' value={name.value} onChange={name.changeHandler} />
                                    <TextField required fullWidth label="Username" margin="normal" variant='outlined' value={userName.value} onChange={userName.changeHandler} />
                                    {
                                        userName.error && (
                                            <Typography color="error" variant='caption'>
                                                {userName.error}
                                            </Typography>
                                        )
                                    }
                                    <TextField required label="Password" fullWidth type="password" margin="normal" variant='outlined' value={password.value} onChange={password.changeHandler} />
                                    {
                                        password.error && (
                                            <Typography color="error" variant='caption'>
                                                {password.error}
                                            </Typography>
                                        )
                                    }
                                    <TextField required fullWidth label="Bio" margin="normal" variant='outlined' value={bio.value} onChange={bio.changeHandler} />
                                    <Button sx={{ marginTop: "1rem", }} fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
                                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                    <Button fullWidth variant="text" color="secondary" onClick={toggleLogin}>
                                        Sign in
                                    </Button>
                                </form>
                            </>
                        )}
                </Paper>
            </Container>
        </div>
    );
}

export default Login;
