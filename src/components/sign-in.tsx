// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useRouter } from 'next/navigation'

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
        <Container component="main" maxWidth="lg">
            {dogUrl && <Box
                sx={{
                    marginTop: 8,
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
                                Sign in
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
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {/*<FormControlLabel*/}
                                {/*    control={<Checkbox value="remember" color="primary"/>}*/}
                                {/*    label="Remember me"*/}
                                {/*/>*/}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                {/*<Grid container>*/}
                                {/*    <Grid item xs>*/}
                                {/*        <Link href="#" variant="body2">*/}
                                {/*            Forgot password?*/}
                                {/*        </Link>*/}
                                {/*    </Grid>*/}
                                {/*    <Grid item>*/}
                                {/*        <Link href="#" variant="body2">*/}
                                {/*            {"Don't have an account? Sign Up"}*/}
                                {/*        </Link>*/}
                                {/*    </Grid>*/}
                                {/*</Grid>*/}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>}
        </Container>
    );
}
