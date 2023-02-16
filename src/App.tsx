import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import './App.css';

const App = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <div>
      <h1>OnsiteIQ HR Application</h1>
      <button type="button" onClick={toggleModal}>
        Start a New Review
      </button>{' '}
      {/** add icons to buttons */}
      <button type="button">View Completed Reviews</button> {/** this may make sense to open a separate page */}
      <Modal isOpen={isOpen}>
        <button type="button">Approve Candidate</button>
        <button type="button">Reject Candidate</button>
      </Modal>
    </div>
  );
};

export default App;
