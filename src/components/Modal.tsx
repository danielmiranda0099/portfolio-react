import styled from "styled-components"


function ModalIconClose({setIsOpen} :any) {
    return(
        <svg height="48" width="48" className="pointer pos-abso-top-right" onClick={() => setIsOpen(false)}>
            <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
        </svg>
    )
}

type modal_type = {
    isOpen: boolean,
    setIsOpen: (args: any) => any,
    options?: any
    children: any
}

const ModalHeaderStyled = styled.div<any>`
    background-color: ${ ({headerBackColor}) => headerBackColor || 'white'};
`

export function Modal({isOpen, setIsOpen, options, children}: modal_type) {

    return(
        <>
        {
            isOpen &&
                    <div className="modal-container-main">
                        <div className="modal-container-content flex-column pos-relt">
                            <ModalHeaderStyled options={options} className="modal-header">
                                <ModalIconClose setIsOpen={setIsOpen} />
                            </ModalHeaderStyled>

                            {children}
                        </div>
                    </div>
        }
        </>
    )
}