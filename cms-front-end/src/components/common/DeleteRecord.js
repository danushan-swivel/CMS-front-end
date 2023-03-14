
import './DeleteRecord.css';
import { deleteStudentById } from '../../lib/api';
import { deleteTuitionClass } from '../../lib/location-api';
import { deletePayment } from '../../lib/payment-api';
import { useNavigate } from 'react-router-dom';

const DeleteRecord = (props) => {
    const navigate = useNavigate();
    console.log('id: ' + props.id);
    console.log('service: ' + props.service);

    async function yesClicked() {
        console.log('Yes Clicked');
        if (props.service == 'student') {
            const response = await deleteStudentById(props.id);
            const responsedata = await response;
            if (responsedata.statusCoe === 2003) {
                window.location = '/students';
            }
            console.log(responsedata);
        }

        if (props.service == 'location') {
            console.log('Location Delete Function');
            const response = await deleteTuitionClass(props.id);
            const responsedata = await response;
            if (responsedata.statusCoe === 2034) {
                window.location = '/locations';
                // TODO change the tuition class id in relavent places in student service
                // TODO the auto refreshing not worling on delete payment and location. Check it
            }
            console.log(responsedata);
        }

        if (props.service == 'payment') {
            console.log('Payment Delete Function');
            const response = await deletePayment(props.id);
            const responsedata = await response;
            if (responsedata.statusCoe === 2052) {
                window.location = '/payments';
                // TODO change the payment id in relavent places in student service
            }
            console.log(responsedata);
        }

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