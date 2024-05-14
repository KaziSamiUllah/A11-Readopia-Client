import Banner from "./Banner";
import Categories from "./Categories";
import Newsletter from "./Newsletter/Newsletter";
import LibraryServices from "./Services/LibraryServices";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Categories></Categories>
    <LibraryServices></LibraryServices>
    <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
