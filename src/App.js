import Accordion from "./components/Accordion";
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: ' React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among enginers'
  },
  {
    title: 'How do use React?',
    content: 'You use React br creating components'
  }
]

const App=()=>{
  return (
    <div >      
      {/* <Accordion items={items}/> */}
      <Search/>
    </div>
  );
}

export default App;
