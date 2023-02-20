/* eslint-disable no-console */
// allowing console error for the purpose of this assignment, but in reality this would be better error logging
import type { Candidate, Status } from 'types/Candidate';
import type { RandomUserResponseInfo } from 'types/RandomUserResponseInfo';
import { generateId } from 'utils/generateId';

export const getRandomCandidate = async (): Promise<Candidate | null> => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const candidates: { results: Candidate[]; info: RandomUserResponseInfo } = await response.json();

    return candidates.results[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSavedCandidates = async (): Promise<Candidate[]> => {
  try {
    const localStorageCandidates = localStorage.getItem('candidates');
    if (localStorageCandidates) {
      return JSON.parse(localStorageCandidates);
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveCandidate = async (
  candidate: Candidate,
  status: 'approved' | 'rejected',
  notes?: string,
): Promise<string | null> => {
  try {
    const localStorageCandidates = localStorage.getItem('candidates');
    const id = generateId();
    if (localStorageCandidates) {
      const parsedCandidates = JSON.parse(localStorageCandidates); // parse existing candidates
      localStorage.setItem(
        'candidates',
        JSON.stringify([...parsedCandidates, { ...candidate, status, savedId: id, notes }]),
      );
    } else {
      localStorage.setItem('candidates', JSON.stringify([{ ...candidate, status, savedId: id, notes }]));
    }
    return id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCandidateReview = async (candidate: Candidate, newStatus: Status, notes?: string) => {
  try {
    const localStorageCandidates = localStorage.getItem('candidates');

    if (localStorageCandidates) {
      const parsedCandidates: Candidate[] = JSON.parse(localStorageCandidates); // parse existing candidates
      const indexToUpdate = parsedCandidates.findIndex(
        (candidateReview) => candidateReview.savedId === candidate.savedId,
      );

      if (indexToUpdate >= 0) {
        const updatedReview = { ...parsedCandidates[indexToUpdate], status: newStatus, notes };
        const reviewsCopy = [...parsedCandidates];
        reviewsCopy[indexToUpdate] = updatedReview;
        localStorage.setItem('candidates', JSON.stringify(reviewsCopy));

        return candidate.savedId;
      }
    }
    throw new Error('Candidate not found.');
  } catch (error) {
    console.error(error);
    return null;
  }
};
