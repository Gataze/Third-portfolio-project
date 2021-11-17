import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import img1 from '../img/img-1.svg'
import img2 from '../img/img-2.svg'
import HomeArticle from "./HomeArticle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUserAgeVerified } from '../store/beersStyles'

const FirstPage = () => {

    const dispatch = useDispatch();
    const userAgeCheck = useSelector(state => state.entities.styles.ageConfirmed);

  
    //Funkcja weryfikuje wiek użytkownika. Osoby niepelnoletnie nie maja dostepu do strony
    const ageVerificationFunction = () => {


        dispatch(setUserAgeVerified(true))
        
    }

    const redirectToGoogle = () => {
        window.location.href = "https://google.com/"
    }


    return ( 
        <Main>
            <HomeArticle />
            <MainGrid>
                <Section>
                    <Overlay>
                        <article>
                            <Link to='/swiat'>
                                <One>
                                    <h2>Historia Piwa na Świecie</h2>
                                    
                                </One>
                            </Link>
                            
                        </article>
                        <OneImg src={img1} alt="hello" />   
                    </Overlay>
                </Section>
                <Section>
                    <Overlay>
                        <article>
                            <Link to='/swiat'>
                                <Two>
                                    <h2>Zapomniene receptury</h2>
                                    
                                </Two>
                            </Link>
                        </article>
                        <TwoImg src={img2} alt="hello" />
                    </Overlay>
                </Section>
                <Section>
                    <Overlay>
                        <article>
                        <Link to='/swiat'>
                                <Three>
                                    <h2>Historia piwa w Polsce</h2>
                                    
                                </Three>
                            </Link>
                        </article>
                        <ThreeImg src={img1} alt="hello" />
                    </Overlay>
                </Section>
                <Section>
                    <Overlay>
                        <article>
                            <Link to='/swiat'>
                                <Four>
                                    <h2>Opuszczone browary</h2>
                                    
                                </Four>
                            </Link>
                        </article>
                        <FourImg src={img1} alt="hello" />
                    </Overlay>
                </Section>
            </MainGrid>
           <AgeVerification userAgeCheck={userAgeCheck}>
                <Logo>
                    <FontAwesomeIcon icon={faBeer}/>
                    BeerStory
                </Logo>
                    <AgeMessage>
                        <h2>Dostęp do strony tylko dla osób pełnoletnich</h2>
                        <label>Czy ukończyłeś 18 lat?</label>
                        <p>
                            <button onClick={() => ageVerificationFunction()}>Tak</button>
                            <button onClick={redirectToGoogle}>Nie</button>
                        </p>
                    </AgeMessage>

           </AgeVerification>
              
        </Main>
     );
}
 
export default FirstPage;


const Main = styled.main`
    display: flex;
    background-color: #4A5859;
    align-items: center;
    justify-content: center;
    gap: 80px;
`

const MainGrid = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 30px;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: 400px 400px;
        justify-items: center;
        justify-content: center;
        padding: 50px 0 75px;
    }
`

const Section = styled.section`
    position: relative;
    width: 350px;
    height: 350px;
    background-color: #4A5859;
    margin: 20px 0;
    @media(min-width: 992px){
        margin: 20px;
        &:nth-child(even){
            transform: translateY(25px);
        }
        &:nth-child(odd){
            transform: translateY(-35px);
        }
        
    }
    img {
        width: 100%;
        height: 100%;
    }

`

//Keyframes animacji sekwencji wyświetlania kafelków na stronie głownej
const opacityChange = keyframes`
from {
    opacity: 0;
    
}

to {
    opacity: 1;
    
}
`


//Kafelki których dotyczy animacja
const One = styled.div`
    animation: ${opacityChange} 0.5s ease-in-out forwards 0s;
`
const Two = styled.div`
    animation: ${opacityChange} 0.5s ease-in-out forwards 0.5s ;
`
const Three = styled.div`
    animation: ${opacityChange} 0.5s ease-in-out forwards 1s ;
`
const Four = styled.div`
    animation: ${opacityChange} 0.5s ease-in-out forwards 1.5s ; 
`

//Keyframes animujący zmianę brightness i opacity zdjęc na stronie głownej
const brightnessChange = keyframes`
    from {
    filter: brightness(100%);
    opacity: 0;
}
    to { 
    filter: brightness(100%);
    opacity: 1;
}
`

const OneImg = styled.img`
    animation: ${brightnessChange} 0.5s ease-in-out forwards 0s;
`
const TwoImg = styled.img`
    animation: ${brightnessChange} 0.5s ease-in-out forwards 0.5s;
`
const ThreeImg = styled.img`
    animation: ${brightnessChange} 0.5s ease-in-out forwards 1s;
`
const FourImg = styled.img`
    animation: ${brightnessChange} 0.5s ease-in-out forwards 1.5s; 
    &:hover {
            /* animation-play-state: paused; */
            mix-blend-mode: multiply;
        }
`





const Overlay = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    z-index: 1;
    background-color: #4A5859;
    transition: all 0.3s ease-in-out;

    

    img {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: transparent;
        filter: brightness(100%);
        
    }

    a {
        text-decoration: none;
    }
    
    article{
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        
        


        
        div {
            
            opacity: 0;
            position: relative;
            height: 100%;
            z-index: 0;
            background-color: transparent;
            h2 {
            
            text-align: center;
            color: white;
            width: 80%;
            margin: 45px auto;
            font-weight: 400;
            width: 60%;
            }

            
         button {
            display: block;
            color: white;
            background: none;
            border: 2px solid white;
            padding: 10px 20px;
            text-transform: uppercase;
            margin: 50px auto;
            font-size: 18px;
            font-weight: 600;

            a {
                color: white;
                text-decoration: none;
            }

        }
        } 
    } 
`


const AgeVerification = styled.section`
        display: ${({userAgeCheck}) => userAgeCheck? 'none' : 'flex'};
        height: 100vh;
        width: 100vw;
        flex-flow: column;
        position: fixed;
        top: 0px;
        align-items: center;
        justify-content: center;
        background-color: white;
        z-index: 999;
        
    `

const Logo = styled.div`

    color: black;
    padding: 20px;
    font-size: 26px;
    text-align: center;
    svg {
        margin-right: 5px;
    }
`

const AgeMessage = styled.article`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 20px;
    text-align: center;

    h2{
        font-size: 25px;
    }

    label {
        margin: 10px;
    }

    button {
        margin: 10px;
        background-color: white;
        border: 2px solid black;
        font-size: 20px;
        &:hover{
            background-color: #999999;
        }
    }
`

