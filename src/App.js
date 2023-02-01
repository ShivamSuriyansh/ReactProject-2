import {Routes,Route} from 'react-router-dom';
import Navigation from './Routes/navigation/navigation.component';
import Home from './Routes/home/home.component';
import SignIn from './Routes/sign-in/signIn.component';



const Shop = ()=>{
  return (
    <h1>Hey I am the shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route> 
      {/* / means home or local host address, or the first landing page  */}
    </Routes>
  );
};

export default App;
