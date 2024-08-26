import styled, { css } from "styled-components"


const Image = styled.img`
object-fit: cover;
width: 100%;
height: ${prop=>prop.height || '60vh'};
${prop=>prop.go && css`
    ${prop.go}
`};

${prop=>prop.view==='true' && css`
@media(min-width:768px){
    height:50dvh!important;
}
`}

`

export default Image