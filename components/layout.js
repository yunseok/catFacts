import styled from "styled-components"

const AppContainer = styled.div`
    display: flex;
`

const Layout = ({ children }) => {
    return (
        <AppContainer>
            {children}
        </AppContainer>
    )
}

export default Layout