import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"


// const Circle = styled.div`
//     width: 18rem;
//     height: 18rem;
//     background-color: rgb(0,128,128,0.5);
//     position: absolute;
//     top: 20px;
//     right: 50px;
// `
const Image = styled.img`
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: cover;
`
const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
`
const Icon = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px 1px;
    min-width: 21rem;
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
