
import { db } from "./firebase";

const App = () => {


console.log(db, 'databse');
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-9xl text-red-500">
        Hello, Tailwind!
      </div>
    </div>
  );
}

export default App;
