import './App.css';
import Text from './components/text/text'
import Button from './components/button/button'

function App() {
  return (
    <>
      <Text textColor='green'>
        <h2>Conteúdo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac turpis turpis. Vivamus ac scelerisque nibh, ut fermentum nisi. Quisque eu dui augue.
        </p>
      </Text>

      <Text textColor='blue'>
        <p>
          lorem
        </p>
      </Text>

      <Text>
        <p>
          Lorem
        </p>
      </Text>

      <Button/>

      <Button label='Download'/>

      <Button label='Baixar CV'/>
    </>
  );
}

export default App;