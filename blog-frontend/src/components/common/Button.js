import React from 'react';
import styled, {css} from 'styled-components';
import {withRouter, Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.24rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover{
        background: ${palette.gray[8]};
    }

    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${props => 
    props.cyan &&
    css`
        background: ${palette.cyan[5]};
        &:hover{
            background: ${palette.cyan[4]};
        }    
    `}
`;

const StyledButton = styled.button`
    // buttonStyle 과 똑같은 값을 재사용
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`

const Button = props => {
    // props.to 값에 따라 styledLink를 사용할 지, StyledButton을 사용할지 정하도록 설정
    return props.to ? (
        // a 태그는 boolean 값이 임의 props로 설정되는 것을 허용하지 않으므로 삼항연산자 사용
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

// const Button = ({to, history, ...rest}) => {

//     const onClick = e => {
//         // to가 있다면 to로 페이지 이동
//         // console.log(to)
//         if(to){
//             history.push(to);
//         }
//         if (rest.onClick){
//             rest.onClick(e);
//         }
//     };
//     return <StyledButton {...rest} onClick={onClick} />;
// }

// export default withRouter(Button);
export default Button;
