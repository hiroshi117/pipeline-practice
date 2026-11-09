import { useState } from "react";

type Todos = {
  id: number;
  title: string;
  done: boolean;
};

export const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    if (text.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), title: text, done: false }]);
    setText("");
  };

  const onClickComplete = (todoId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const onClickDelete = (todoId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <h1>パイプライン</h1>
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.title}
          </span>
          <button onClick={() => onClickComplete(todo.id)}>完了</button>
          <button onClick={() => onClickDelete(todo.id)}>削除</button>
        </div>
      ))}
    </>
  );
};
