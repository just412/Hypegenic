import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${mobile({padding: "10px 0px"})}
`

// Left Navbar
const Left = styled.div`
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 1rem;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({width: "50px"})}
`

// Center Navbar
const Center = styled.div`
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`

// Right Navbar
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:"2", justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 1rem;
    cursor: pointer;
    margin-left: 1.5rem;
    white-space: nowrap;
    ${mobile({fontSize: "12px", marginLeft:"10px"})}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Link to="/" style={{ textDecoration: "none", color:"black" }}>
                        <Logo>Hypenic.</Logo>
                    </Link>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart" style={{ textDecoration: "none", color: "teal" }}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
