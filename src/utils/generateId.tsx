/** generates and returns a unique ID using Date.now and Math.random  */
export const generateId = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
