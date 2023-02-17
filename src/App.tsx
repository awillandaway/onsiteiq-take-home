import { useModal } from 'hooks/useModal';
import { useState } from 'react';
import { getRandomCandidate } from 'services/CandidateService';
import { CandidateInfoCard } from 'components/CandidateInfoCard/CandidateInfoCard';
import type { Candidate } from 'types/Candidate';
import { MainContent, Navbar, NotificationNumber, NotificationsSection } from './App.styles';
import './App.css';

const App = () => {
  const { isOpen, toggleModal } = useModal();
  const [currentCandidateInfo, setCurrentCandidateInfo] = useState<Candidate | null>();

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
        {/** add icons to buttons */}
        <button type="button" onClick={onClickGetCandidate}>
          Start New Candidate Review
        </button>
        <button type="button">View Completed Reviews</button> {/** this may make sense to open a separate page */}
        <pre>{JSON.stringify(currentCandidateInfo)}</pre>
        {!currentCandidateInfo && <div>Please click the Start New Candidate Review button to start a review.</div>}
        {currentCandidateInfo && <CandidateInfoCard candidate={currentCandidateInfo} />}
      </MainContent>
    </div>
  );
};

export default App;
