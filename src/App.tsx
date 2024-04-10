import './App.css';
import ParamEditor from './components/paramEditor/ParamEditor';

function App() {

  const params = [
    { id: 1, name: 'Назначение' },
    { id: 2, name: 'Длина' },
  ];

  const initialModel = {
    paramValues: [{ paramId: 1, value: 'повседневное' }, { paramId: 2, value: 'макси' }],
  };

  return (
    <div className="App">
      <ParamEditor params={params} model={initialModel} />
    </div>
  );
}

export default App;
