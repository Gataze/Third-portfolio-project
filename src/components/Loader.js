import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";




const Loader = () => {

    const authLoading = useSelector(state => state.entities.auth.loading);
    const articleLoading = useSelector(state => state.entities.beers.loading);
    const loading = authLoading? authLoading : articleLoading;
    console.log(loading)

    return ( 
        <LoaderContainer loading={loading}>
            <AppLoader></AppLoader>
        </LoaderContainer>
        
     );
}
 
export default Loader;

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`


const LoaderContainer = styled.section`
    display: ${({loading}) => loading? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0,0,0,0.0);
    box-sizing: border-box;
`


const AppLoader = styled.div`
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 2s linear infinite;
`

