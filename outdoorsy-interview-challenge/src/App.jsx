import Input from "./components/input-component/Input.component"
import CampersList from "./components/campers-list/Campers-list.component"

function App() {


  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column',}}>
      <Input />
      <CampersList />
    </div>
  )
}

export default App
