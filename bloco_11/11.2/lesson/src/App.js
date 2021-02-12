import Greeting from "./content";
import GreetingProps from "./props";
import Image from "./Image";

function App() {
  return (
    <div>
      <div>
        <Greeting name="Nathália" />
        <GreetingProps name="Nathália" lastName="Veneziano" />
      </div>
      <div>
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" />
        <Image alternativeText="Cute cat staring" />
      </div>
    </div>
  );
}

export default App;
