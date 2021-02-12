const tasks = ["HTML", "CSS", "JavaScript", "Git", "Teste Unitário"];

const task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Lista de Tarefas</header>
      <ul>
        {tasks.map((tarefa) => {
          return task(tarefa);
        })}
      </ul>
    </div>
  );
}

export default App;
