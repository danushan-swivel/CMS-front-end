// import { Container, Col, Row, Form, Button } from 'react-bootstrap';
// import React, { useRef } from 'react';
// import './StudentForm.css';

// const addStudentUrl = 'http://localhost:8104/api/v1/student';

// const StudentForm = () => {
//     const accessToken = localStorage.getItem('access_token');
//     const firstNameRef = useRef('');
//     const lastNameRef = useRef('');
//     const addressRef = useRef('');
//     const ageRef = useRef(0);
//     const genderRef = useRef('');
//     const phoneNumberRef = useRef('');
//     const locationRef = useRef('');

//     const submitAddStudentReq = () => {
//         addStudentFunction();
//     }
//     async function addStudentFunction() {


//         const student = {
//             firstName: firstNameRef.current.value,
//             lastName: lastNameRef.current.value,
//             address: addressRef.current.value,
//             age: Number(ageRef.current.value),
//             gender: genderRef.current.value,
//             phoneNumber: phoneNumberRef.current.value,
//             locationId: locationRef.current.value
//         }

//         console.log(student);

//         await fetch(addStudentUrl, {
//             method: 'POST',
//             body: JSON.stringify(student),
//             headers: {
//                 'access_token': accessToken,
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         }).then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//         }).then(responseData => {
//             console.log(responseData);
//         })
//     }
//     return (<div>
//         <Container className='add-student-container'>
//             <Form className='add-student-form'>

//                 <Row className='add-student-form-row'>
//                     <Button className='form-btn' size='md' variant="primary" onClick={submitAddStudentReq} >Add Student</Button>
//                 </Row>
//             </Form>
//         </Container>
//     </div >
//     );
// }

// export default StudentForm;