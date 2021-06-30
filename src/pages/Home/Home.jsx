import Header from 'components/header/Header';
import IconHome from 'assets/logo.jpg';
import Entries from 'components/entries/Entries';
import GroupTask from 'components/group-task/GroupTask';
import FloatButton from 'components/float-button/FloatButton';

function Home() {
  return (
    <>
      <Header icon={IconHome} title="Task List" />
      <Entries />
      <GroupTask />
      <FloatButton />
    </>
  );
}

export default Home;
