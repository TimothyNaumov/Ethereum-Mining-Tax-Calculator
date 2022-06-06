import { useNavigate } from 'react-router-dom';

function NextButton(props) {
    const navigate = useNavigate();
    const moveToNextPage = function(){
        navigate(props.destination);
    }

    return ( 
        <button type="button" className="btn btn-primary" onClick={moveToNextPage}>{props.text}</button>
     );
}

export default NextButton;