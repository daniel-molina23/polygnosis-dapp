import './App.css';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Demo from '../pages/Demo';
import Contact from '../pages/Contact';
import CurrentStages from '../pages/CurrentStages';
import MyWorkPage from '../demo/MyWorkPage';
import ExplorePage from '../demo/ExplorePage';
import {ProtectedRoute} from '../auth/ProtectedRoute';
import {
  useAuth,
  SignInForm,
  CreateAccountPage
} from '../auth';
import { 
  UploadData,
  EditProfilePage,
} from '../user';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  const {isLoading, user } = useAuth();
  return (
    <BrowserRouter>
      <Navbar isAuthed={!!user}/>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/home" component={Home}>
            <Home />
          </Route>
          <Route exact path="/" >
            <Redirect to="/home" />
          </Route>
          <Route path="/current-stages" component={CurrentStages}>
            <CurrentStages />
          </Route>
          <Route path="/explore" component={Demo}>
            <Demo />
          </Route>
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/my-work" component={MyWorkPage}>
            <MyWorkPage />
          </ProtectedRoute>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/sign-in" component={SignInForm}>
            <SignInForm />
          </Route>
          <Route path="/create-account" component={CreateAccountPage}>
            <CreateAccountPage />
          </Route>
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/edit-profile" component={EditProfilePage}>
            <EditProfilePage />
          </ProtectedRoute>
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/upload-data" component={UploadData}>
            <UploadData />
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
