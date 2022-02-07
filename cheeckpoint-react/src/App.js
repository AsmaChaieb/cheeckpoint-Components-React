
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <h2 className='titre'> Cheeckpoint React Components ;)  </h2>
      <hr/>
      <br/>


      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;
