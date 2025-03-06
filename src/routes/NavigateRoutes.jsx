import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from '../resources/views/WelcomeScreen'
import LoginScreen from '../resources/views/LoginScreen';
import AdminScreen from '../resources/views/AdminScreen';
import DigitalMapScreen from '../resources/views/DigitalMapScreen';
import RutasScreen from '../resources/views/RutasScreen';


export default function NavigateRoutes() {
  return (
    <>
    <Routes>
        <Route path='/welcome' element={<WelcomeScreen/>}></Route>
        <Route path='/login' element={<LoginScreen/>}></Route>
        <Route path='/digitalMap' element={<DigitalMapScreen/>}></Route>
        <Route path='/rutas' element={<RutasScreen/>}></Route>
        <Route path='/admin' element={<AdminScreen/>}></Route>
    </Routes>
    </>
  )
}
