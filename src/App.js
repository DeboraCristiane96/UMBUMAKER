import './App.css';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

import AppRouts from './main/AppRoutes';   

function App() {
  return (
      <div>
        <AppRouts></AppRouts>
      </div>
    
  );
}

export default App;