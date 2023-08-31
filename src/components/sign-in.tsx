// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useRouter } from 'next/navigation'
import '../styles/sign-in.scss'

const users = [{ username: 'admin', password: '1234', isAdmin: true }, {
    username: 'user',
    password: '1234',
    isAdmin: false
}]

export function SignIn() {
    const [dogUrl, setDogUrl] = useState<string>('')
    const { push } = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const isUser = users.some((user) => user.username === data.get("username") && user.password === data.get("password"));
        if (isUser) {
            push('/main-page')
        }
    };

    useEffect(() => {

            const fetchData = async () => {
                const resp = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await resp.json();
                setDogUrl(data.message)
            }

            fetchData()
        }
        , [])

    return (
        <Box className="sign-in-container">
            {dogUrl && <Box
                sx={{
                    width: '1152px'
                }}
            >
                <Grid container>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${dogUrl})`,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                כניסה למערכת
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="שם משתמש"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="זכור אותי"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    התחברות
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>}
        </Box>
    );
}
