import { Card } from 'components/shared/Card/Card';
import type { Candidate } from 'types/Candidate';
import { Name, PhotoAndName, SectionHeader } from './CandidateInfoCard.styles';
import { CardField } from './CardField/CardField';

interface CandidateInfoCardProps {
  candidate: Candidate;
}

export const CandidateInfoCard = ({ candidate }: CandidateInfoCardProps) => {
  const formatCandidateName = () => {
    const { title, first, last } = candidate.name;
    return `${title} ${first} ${last}`; // should we show title?
  };

  const formatStreet = () => {
    const { number, name } = candidate.location.street;
    return `${number} ${name}`;
  };

  const formatCityState = () => {
    const { city, state, postcode } = candidate.location;
    return `${city}, ${state} ${postcode}`;
  };

  const registeredDate = new Date(candidate.registered.date);

  return (
    <Card>
      {/* <h2>Candidate Info</h2> */}
      <PhotoAndName>
        <img src={candidate.picture.large} alt="candidate" />
        <Name>{formatCandidateName()}</Name>
      </PhotoAndName>

      <SectionHeader>Basic Info</SectionHeader>
      <CardField label="Registered">{registeredDate.toLocaleDateString()}</CardField>
      <CardField label="Gender">{candidate.gender}</CardField>
      <CardField label="Age">{candidate.dob.age}</CardField>

      <SectionHeader>Contact Info</SectionHeader>
      <CardField label="Email">{candidate.email}</CardField>
      <CardField label="Address">
        <div>
          <div>{formatStreet()}</div>
          <div>{formatCityState()}</div>
          <div>{candidate.location.country}</div>
        </div>
      </CardField>

      <CardField label="Phone">Phone: {candidate.phone}</CardField>
      <CardField label="Cell">Cell: {candidate.cell}</CardField>
      <input type="text" placeholder="Notes" />
      <button type="button">Approve</button>
      <button type="button">Reject</button>
    </Card>
  );
};
