import { Modal } from "./Modal";

type socialMedia_type = {
    isOpen: boolean,
    setIsOpen: (args: any) => any
}

export function SocialMedia({isOpen, setIsOpen} :socialMedia_type) {

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="social-media-container">
                <h2>Social Media</h2>
            </div>
        </Modal>
    )
}