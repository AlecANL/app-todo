import Header from 'components/header/Header';
import IconHome from 'assets/logo.jpg';
import Entries from 'components/entries/Entries';
import GroupTask from 'components/group-task/GroupTask';

function Home() {
  return (
    <>
      <Header icon={IconHome} title="Task List" />
      <Entries />
      <GroupTask />
    </>
  );
}

export default Home;
