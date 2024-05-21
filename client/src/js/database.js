import { openDB } from 'idb';

// Initialize the database
const initdb = async () => 
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Export a function to GET from the database.
export const getDb = async () => {
  console.log('GET from the database');
  //creates connection to db
  const textDb = await openDB('jate', 1);
  const tx = textDb.transaction('jate', 'readonly');
 //opens object store
  const store = tx.objectStore('jate');
  //put method
  const request = store.get(1); 
  
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

// Export a function to PUT (update) data in the database.
export const putDb = async (content) => {
  console.log('Update the database');
  const textDb = await openDB('jate', 1);
  const tx = textDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Updated in the database', result);
};

// Start the database.
initdb();
