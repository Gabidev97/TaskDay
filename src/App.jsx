import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Input,
  Container,
  ToDoList,
  ListItem,
  Trash,
  Rocket,
} from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setTask] = useState("");

  function addAssignment(ev) {
    setTask(ev.target.value);
  }

  function generateTask() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deletedTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={addAssignment} placeholder="Digite o nome da tarefa" />

        <Button onClick={generateTask}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Rocket onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletedTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há tarefas na lista</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
