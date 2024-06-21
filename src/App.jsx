import LazyImageContainer from "./components/LazyImageContainer";
const images = [
  "https://cdn.pixabay.com/photo/2024/06/06/13/25/black-tailed-skimmer-8812720_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_960_720.jpg",
];

const App = () => {
  return <LazyImageContainer images={images} />;
};

export default App;
