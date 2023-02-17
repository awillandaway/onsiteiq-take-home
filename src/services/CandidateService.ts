import type { Candidate } from 'types/Candidate';
import type { RandomUserResponseInfo } from 'types/RandomUserResponseInfo';

export const getRandomCandidate = async (): Promise<Candidate | null> => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const candidates: { results: Candidate[]; info: RandomUserResponseInfo } = await response.json();

    return candidates.results[0];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // allowing console error for the purpose of this assignment, but in reality this would be better error logging
    return null;
  }
};
