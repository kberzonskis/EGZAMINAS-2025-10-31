import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {PublicTemplate} from '../src/template/PublicTemplate'
import {AdminTemplate} from './template/AdminTemplates'

import { HomePage } from './pages/public/Home';
import { Page404 } from './pages/public/page404';

import { RegisterPage } from './pages/public/register';
import { LoginPage } from './pages/public/login';
import {LogoutPage} from './pages/public/Logout'


import { UserContextWrapper } from './context/user/UserContextWrapper';


import { AdminDasboardPage } from './pages/admin/Dashboard';


export function App() {

return (
 
<UserContextWrapper>
<BrowserRouter>
<Routes>


<Route element={<PublicTemplate />}>
<Route path='/' element={<HomePage />} />
<Route path='/register' element={<RegisterPage />} />
<Route path='/login' element={<LoginPage />} />
<Route path='/logout' element={<LogoutPage />} />


</Route>

<Route element={<AdminTemplate />}>
  <Route path='/admin' element={<AdminDasboardPage />} />
  
</Route>



<Route element={<PublicTemplate />}>
<Route path='*' index element={<Page404 />} />
</Route>

</Routes>


</BrowserRouter>
</UserContextWrapper>
)
}

