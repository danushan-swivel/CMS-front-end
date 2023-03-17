import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Notification = (displayMessage, status) => {
    let color = "linear-gradient(to right, #00b09b, #96c93d)";
    if (status === 'success') {
        color = '';
    }
    Toastify({
        text: displayMessage,
        duration: 4000,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right",
        style: {
            background: color,
        }
    }).showToast();
}

export default Notification;