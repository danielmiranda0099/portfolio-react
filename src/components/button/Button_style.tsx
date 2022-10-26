import styled, { css } from 'styled-components';

type ButtonStyled_type = { 
    options?: {
        type?: string;
        color?: string;
        backColor?: string;
    }
}

export const ButtonStyled = styled.button<ButtonStyled_type>`

color: ${ ({options}) => options?.color|| 'black'};
background-color: ${ ({color}) => color || 'while'};
border-color: ${ ({color}) => color || 'black'};

${ ({options}) => options?.type === 'fill' && css`
    color: ${ options.color };
    background-color: ${ options.backColor};
    border: solid 1px ${ options.backColor};
`}

&:hover {
    color: ${ ({options}) => options?.backColor || 'while'};
    background-color: ${ ({color}) => color || 'inherit'};
    border-color: ${ ({color}) => color || 'inherit'};
}
`; 