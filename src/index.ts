import express, { Request, Response } from "express";


const app = express();

app.use(express.json());

interface Todo {
  id: number,
  title: string,
  description: string
}

let todos: Todo[] = [];
let GLOBAL_ID = 0;

app.post("/todo", (req: Request, res: Response) => {
  const { title, description } = req.body;
  todos.push({
    id: GLOBAL_ID,
    title,
    description
  });
  GLOBAL_ID++;

  res.json({
    msg: "todo pused successfully"
  });
});



app.get("/todos", (req: Request, res: Response) => {
  res.json({
    todos
  });

});

app.listen(8000, () => {
  console.log("server is running on port 3000");
})
