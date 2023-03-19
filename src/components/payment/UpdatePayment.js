import { Fragment } from "react";
import StudentPayment from "../students/StudentPayment";
import { updatePayment } from "../../lib/payment-api";


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

    const paymentHadler = async (month, year) => {
        const requestBody = {
            'studentId': props.studentId,
            'paymentId': props.id,
            'paymentMonth': {
                'month': month,
                'year': year
            }
        }

        const response = await updatePayment(requestBody);
        const responseData = await response;
        if (responseData.statusCode === 2051) {
            Notification(responseData.message, "success");
        } else {
            Notification(responseData.message, "error");
        }

    }
    return (
        <Fragment>
            <StudentPayment paymentHadler={paymentHadler} props={props} paymentObject={paymentObject} />
        </Fragment>
    );
}

export default UpdatePayment;