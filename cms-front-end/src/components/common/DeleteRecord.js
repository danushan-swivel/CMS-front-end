
import './DeleteRecord.css';
import { deleteStudentById } from '../../lib/api';
import { useNavigate } from 'react-router-dom';

const DeleteRecord = (props) => {
    const navigate = useNavigate();
    console.log('id: ' + props.id);
    console.log('service: ' + props.service);

    async function yesClicked() {
        console.log('Yes Clicked');
        const response = await deleteStudentById(props.id);
        const responsedata = await response;
        if (responsedata.statusCoe === 2003) {
            window.location = '/students';
        }
        console.log(responsedata);
    }

    function noClicked() {
        console.log('No Clicked');
        props.noClick();
    }



    return (
        <div className='student-payment-div'>
            <h4>{`Do you want to delete ${props.service}?`}</h4>
            <h5>{`CAUTION: All ${props.service} related data will be deleted!!`}</h5>
            <div>
                <button onClick={yesClicked}>Yes</button>
                <button onClick={noClicked}>No</button>
            </div>
        </div>

    );
}

export default DeleteRecord;