import { Fragment } from "react";
import StudentPayment from "../students/StudentPayment";


const UpdatePayment = ({ props }) => {
    const paymentMonth = props.paymentMonth;
    const paymentMonthArray = paymentMonth.split(" ");
    console.log('payment month: ' + paymentMonth);
    const paymentObject = {
        'month': paymentMonthArray[0],
        'year': paymentMonthArray[1],
        'paymentId': props.id
    }

    console.log(paymentObject);

    const paymentHadler = (

    ) => {

    }
    return (
        <Fragment>
            <StudentPayment paymentHadler={paymentHadler} props={props} paymentObject={paymentObject} />
        </Fragment>
    );
}

export default UpdatePayment;