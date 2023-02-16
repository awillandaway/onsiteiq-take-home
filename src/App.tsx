import { Modal } from 'components/shared/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { useState } from 'react';
import { getRandomCandidate } from 'services/CandidateService';
import { MainContent, Navbar, NotificationNumber, NotificationsSection } from './App.styles';
import './App.css';

const App = () => {
  const { isOpen, toggleModal } = useModal();
  const [currentCandidateInfo, setCurrentCandidateInfo] = useState<any>({});

  const onClickGetCandidate = () => {
    getRandomCandidate().then((candidate) => {
      setCurrentCandidateInfo(candidate);
    });
  };

  return (
    <div>
      <Navbar>
        <h1>OnsiteIQ HR Application</h1>
        <NotificationsSection>
          You have <NotificationNumber>{Math.floor(Math.random() * 8) + 2}</NotificationNumber> candidates to review.
        </NotificationsSection>
      </Navbar>

      <MainContent>
        <button type="button" onClick={toggleModal}>
          Start a New Review
        </button>
        <button type="button" onClick={onClickGetCandidate}>
          Get Candidate
        </button>
        <pre>{JSON.stringify(currentCandidateInfo)}</pre>
        {/** add icons to buttons */}
        <button type="button">View Completed Reviews</button> {/** this may make sense to open a separate page */}
      </MainContent>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <button type="button">Approve Candidate</button> {/** maybe just have this in the page itself */}
        <button type="button">Reject Candidate</button>
        <input type="text" placeholder="Notes" />
      </Modal>
    </div>
  );
};

export default App;
