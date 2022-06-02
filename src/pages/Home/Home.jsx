import React from 'react'
import Companies from '../../components/Companies/Companies'
import InitialPage from '../../components/InitialPage/InitialPage'
import Items from '../../components/Items/Items'

const Home = () => {
    return (
        <>
            <InitialPage />
            <Items />
            <Companies />
        </>
    )
}

export default Home