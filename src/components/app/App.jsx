import Plates from "../plates/Plates";

// Вопросы:
// - где мы запишем/подключим массив? в общую или сразу в нужный нам файл?

//создать массив с объектами (данные) и отрисовать все плитки по данным (использовать метод map)
const plateData = [
  {
    id: 1,
    amount: 22, //???
    progress: "done",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.",
  },
  {
    id: 3,
    amount: 7,
    progress: "inprogress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus. Obcaecati aliquid, rem unde sequi quis, blanditiis in facilis similique reiciendis iusto quidem dolore, facere saepe deserunt tempore vero!",
  },
  {
    id: 8,
    amount: 10,
    progress: "ongoing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus. Obcaecati aliquid, rem unde sequi quis, blanditiis in facilis similique reiciendis iusto quidem dolore, facere saepe deserunt tempore vero! Architecto.Dolore, dolorem, impedit veritatis sunt hic cupiditate nulla enim blanditiis omnis distinctio alias voluptates fugit dignissimos ut mollitia ad",
  },
  {
    id: 5,
    amount: 12,
    progress: "waiting for review",
    description: "Lorem ipsum dolor sit ",
  },
];

function App() {
  return <Plates data={plateData} />;
}
export default App;
