import { ButtonStyled } from "./Button_style"


type Button_type = {
    options?: { 
        type?: string,
        color?: string,
        backColor?: string,
        handleClick?: (args: any) => any,
    },
    children?: any
}



export function Button( {options, children }: Button_type ) {

    return(
        <ButtonStyled options={options} className='button' onClick={options?.handleClick}> 
            {children}
        </ButtonStyled>
    )
}