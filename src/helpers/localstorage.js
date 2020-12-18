export const getObject = key => JSON.parse(localStorage.getItem(key));
export const setObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const saveObject = (key, value) => chrome.storage.local.set(key, value);