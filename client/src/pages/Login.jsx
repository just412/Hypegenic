import { useState } from "react"
import styled from "styled-components"
import { login } from "../redux/ApiCalls"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.2), 
        rgba(255, 255, 255, 0.5)
        ), url("https://wallpaper.dog/large/10752315.jpg") center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: clamp(25rem, 50vw, 30vw);
    background-color: white;
`
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    font-size: 1rem;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`
const Link = styled.a`
    margin: 10px 0px;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
    color: red;
`
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder = "username" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                        placeholder = "password" 
                        type= "password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
