import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div` 
    margin: 20px;
    display: flex;
    align-items: center;
    ${mobile({ display: "flex", flexDirection: "column" })}
`
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    width: 7rem;
    ${mobile({ marginTop: "1rem" })}
`
const Option = styled.option`

`

const ProductList = () => {
    const category = useLocation().pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (event) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>

                    <Select name="color" onChange={handleFilters}>
                        <Option>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select name="size" onChange={handleFilters}>
                        <Option>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>

                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText> 
                    <Select onChange={(event) => setSort(event.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filter} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
