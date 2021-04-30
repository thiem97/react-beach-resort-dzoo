import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';
const orange = '#f15025';

// const SimpleButton = styled.button`
//     color:${orange};
//     background:green;
//     font-size:3rem;
// `

const StyledHero = styled.header`
min-height: 60vh;
  /* background: url(${defaultImg}) center/cover no-repeat; */
  /* background: url(${props =>  props.img}) center/cover no-repeat; */
    background: url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`

// export default SimpleButton;
export default StyledHero;