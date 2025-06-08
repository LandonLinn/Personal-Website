import './UpButton.css';

// Import ToTop
import { toTop } from '../../utils/helpers';

const UpButton = () => {
    return(
        <div className='up-button-container' onClick={toTop}>
            <img 
                src="/icons/arrow.png" 
                alt="Arrow" 
                className='arrow-icon'
            />
        </div>
    )
}

export default UpButton;