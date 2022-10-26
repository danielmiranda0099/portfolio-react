import { useState } from 'react';
import { Button } from "../components/button";
import { SocialMedia } from '../components/SocilaMedia';

export function Aboutme() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    return(
        <div className="aboutme-container">
            <div className="aboutme-icon">
                <h1>ICON</h1>
            </div>

            <div className="aboutme-content flex-column cent-cent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit assumenda iste mollitia esse quaerat, odit, sapiente beatae illo perferendis amet magni natus harum eum! Dolorum incidunt dicta pariatur odit?</p>

                <Button options={{type:'fill', color: 'white', backColor:'#654F6F', handleClick}}>
                    SHOW SOCIAL MEDIA
                </Button>
                <SocialMedia isOpen={isOpen} setIsOpen={setIsOpen} />
            

                <Button>
                    DOWLOAD HV
                </Button>
            </div>
        </div>
    )
}