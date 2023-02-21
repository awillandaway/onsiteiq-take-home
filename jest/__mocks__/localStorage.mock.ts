import { mockApprovedCandidate, mockRejectedCandidate } from '../testData';

const initialStore = {
  candidates: JSON.stringify([mockApprovedCandidate, mockRejectedCandidate]),
};

const localStorageMock = (() => {
  let store: Record<string, any> = initialStore;

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = { ...initialStore };
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
