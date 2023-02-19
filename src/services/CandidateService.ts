/* eslint-disable no-console */
// allowing console error for the purpose of this assignment, but in reality this would be better error logging
import type { Candidate } from 'types/Candidate';
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

export interface ExtendedCandidate extends Candidate {
  savedId: string; // named this way to avoid conflict with existing ID field from original randomuser API
}

export const getSavedCandidates = async (): Promise<ExtendedCandidate[]> => {
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
