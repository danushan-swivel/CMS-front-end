import './App.css';
import Login from './pages/Login';
import StudentsView from './pages/StudentsView';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewStudent from './pages/NewStudent';
import { useMemo, useState } from 'react';
import StudentContext from './context/StudentContext';



function App() {
  const [students, setStudents] = useState([]);
  const dispatchStudentEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_STUDNET':
        setStudents([...students, payload.newStudent])
        return;
      case 'RESET':
        setStudents([])
        return;
      case 'SEARCH_STUDENT':
        setStudents([students.map(student => student.firstName === payload.firstName ? student : payload.backupStudent)])
        return;
      case 'UPDATE_STUDENT':
        setStudents(students.map(student => student.studentId === payload.studentId ? { ...payload.student } : student))
        return;
      case 'DELETE_STUDENT':
        setStudents([students.filter(student => student.studentId !== payload.studentId)]);
        // FilmService.getAllFilms().then((res) => { if (res.status === 200) { setStudents(res.data) } })
        return;
      case 'GET_ALL_STUDENTS':
        console.log('payload' + payload.newStudent);
        setStudents([...students, payload.newStudent]);
        console.log('students: ' + students);
        // FilmService.getAllFilms().then((res) => { if (res.status === 200) { setStudents(res.data) } })
        return;
      default: return;
    }
  }

  const studentProviderValue = useMemo(() => ({ students, dispatchStudentEvent }), [students, dispatchStudentEvent]);
  return (
    <Layout>
      <StudentContext.Provider value={studentProviderValue}>
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/" exact>
            <Redirect to='/login' />
          </Route>
          <Route path="/students" exact>
            <StudentsView />
          </Route>
          <Route path="/student/add" exact>
            <NewStudent />
          </Route>
        </Switch>
      </StudentContext.Provider>
    </Layout>
  );
}

export default App;
