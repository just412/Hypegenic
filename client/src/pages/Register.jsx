import styled from "styled-components"

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
    width: clamp(25rem, 40vw, 40vw);
    background-color: white;
`
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 1rem;
`
const Agreement = styled.span`
    font-size: 1rem;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder = "name" />
                    <Input placeholder = "last name" />
                    <Input placeholder = "email" />
                    <Input placeholder = "username" />
                    <Input placeholder = "password" />
                    <Input placeholder = "confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
