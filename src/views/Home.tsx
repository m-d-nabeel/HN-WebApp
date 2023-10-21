import News from "../components/News";
import Searchbar from "../components/Searchbar";
import bgTexture from "../assets/bgtexture.svg";

const Home = () => {
  return (
    <div
      className="flex h-screen flex-col gap-y-4 overflow-y-auto bg-cover bg-fixed bg-bottom bg-no-repeat p-12"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <Searchbar />
      <News />
    </div>
  );
};

export default Home;
