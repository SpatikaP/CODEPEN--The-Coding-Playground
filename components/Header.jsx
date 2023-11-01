

import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header  = () => {

    const logo = 'https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png'
    
    return(
        <Container position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{width: 40 }} />
            </Toolbar>
        </Container>
    )
}


export default Header;