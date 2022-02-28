function Greet(props) {
    {/* props is ONE big object that contains all your funciton arguments as properties of the object */}
    {/* props = { 
      personName: '',
      cityName: ''
    } */}

    return <p> My name is { props.personName } and I live in { props.cityName }</p>
  }
  function Footer(props){
      return(
          <div>
              <p> This is the januery 2022 cohort of the {props.cohortName}</p>
          </div>
      )
  }

  function AppTitle() {
    return <h1 className="App">Hello Ironhackers</h1>

  }

  const name1 = 'Marco'
  const name2 = 'Fede'
  const name2 = 'Pedro'
  function App() {
    return (
      <div>
        <AppTitle />
        <Greet personName={name1} cityName='Barcelona' />
        <Greet personName={name2} cityName='Boston'/>
        <Greet personName={name3} cityName='Buenos Aires'/>
        <Footer cohortName={"Desarrolladores Masquerades"} />

        </div>
      )
  }

    // ReactDOM.render injects all of the React app code into the DOM
    ReactDOM.render(<App />, document.getElementById("root"));