import './App.css';
import Login from './pages/Login';
import StudentsView from './pages/StudentsView';
import { Route, Navigate, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewStudent from './pages/NewStudent';
import StudentDetailView from './components/students/StudentDetailView';
import StudentPayment from './components/students/StudentPayment';
import UpdateStudent from './pages/UpdateStudent';
import LocationsView from './pages/LocationsVIew';
import PaymentsView from './pages/PaymentsView';
import NewLocation from './pages/NewLocation';
import PaymentReport from './pages/PaymentReportView';
import PaymentReportView from './pages/PaymentReportView';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate to='/login' />}> </Route>
        <Route path="/students" element={<StudentsView />}></Route>
        <Route path="/student/add" element={<NewStudent />}></Route>
        <Route path="/students/view/:studentId" element={<StudentDetailView />}></Route>
        <Route path="/students/update/:studentId" element={<UpdateStudent />}></Route>
        <Route path="/locations" element={<LocationsView />}></Route>
        <Route path="/location/add" element={<NewLocation />}></Route>
        <Route path="/payments" element={<PaymentsView />}></Route>
        <Route path="/payment/report" element={<PaymentReportView />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
