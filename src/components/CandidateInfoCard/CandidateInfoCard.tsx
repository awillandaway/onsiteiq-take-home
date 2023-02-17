import { Card } from 'components/shared/Card/Card';
import type { Candidate } from 'types/Candidate';

interface CandidateInfoCardProps {
  candidate: Candidate;
}

export const CandidateInfoCard = ({ candidate }: CandidateInfoCardProps) => {
  const formatCandidateName = () => {
    const { title, first, last } = candidate.name;
    return `${title} ${first} ${last}`; // should we show title?
  };

  return (
    <Card>
      <div>Candidate Info</div>
      <img src={candidate.picture.large} alt="candidate" />
      <div>{formatCandidateName()}</div>
      <div>Email: {candidate.email}</div>
      <div>Gender: {candidate.gender}</div>
      <div>Age: {candidate.dob.age}</div>
      <div>Phone: {candidate.phone}</div>
      <div>Cell: {candidate.cell}</div>
      <input type="text" placeholder="Notes" />
      <button type="button">Approve</button>
      <button type="button">Reject</button>
    </Card>
  );
};
