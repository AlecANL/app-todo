import Header from '../../components/header/Header';
import IconHome from '../../assets/logo.jpg';

function Home() {
  return (
    <>
      <Header icon={IconHome} title="Task List" />
      <h1>Welcome Home</h1>
    </>
  );
}

export default Home;
