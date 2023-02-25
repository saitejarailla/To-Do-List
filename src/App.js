import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './components/AddToDo';
import CountToDo from './components/CountToDo'
import DisplayToDo from'./components/DisplayToDo'


function App() {
  return (
    <div className='body'>
    <div className="container">
      <div className='row'>
        <div className='col-sm-4 text-info'>
          <AddToDo></AddToDo>
        </div>
        <div className='col-sm-4 text-info'>
           <DisplayToDo></DisplayToDo>
        </div>
        <div className='col-sm-4 text-info'>
          <CountToDo></CountToDo>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
