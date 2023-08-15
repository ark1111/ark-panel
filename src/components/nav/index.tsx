import { Box, Logo, LogoText } from "./index.styled"

type Props = {}


const Nav = (props: Props) => {
  return (
    <Box>
        <Logo>
            <LogoText>ARK</LogoText>
        </Logo>
    </Box>
  )
}

export default Nav