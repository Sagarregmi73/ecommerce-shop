
//import {useSelector,useDispatch} from 'react-redux'
//import {getUsersFetch} from './redux/action'
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Detailpage from './pages/detailpage';
import Cartpage from './pages/cartpage';
function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/details/:id' element={<Detailpage />} />
      <Route exact path='/cart/:id' element={<Cartpage />} />
      </Routes>
        
  
  );
}

export default App;

 /*
const dispatch = useDispatch();
  const users = useSelector(state=>state.cartReducer.users);
<button onClick={()=>dispatch(getUsersFetch())}>getUserFetch</button>
      users:{users.map(user=>(
        <div key={user.id}>
          <div>
          {user.name}
          </div>
          </div>
      ))}*/