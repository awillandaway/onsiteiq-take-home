import { mockApprovedCandidate, mockRejectedCandidate } from '../testData';

const localStorageMock = (() => {
  let store: Record<string, any> = {
    candidates: JSON.stringify([mockApprovedCandidate, mockRejectedCandidate]),
  };

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
