import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";
import NavbarForm from "../components/Header/NavbarForm";
import TopButton from "../components/TopButton/TopButton";
import Search from "../containers/Search/Search";

const App = () => {
  return (
    <>
      <NavbarForm />
      <Search />
      <ChatbotIcon />
      <TopButton />
    </>
  );
};

export default App;
