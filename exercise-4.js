const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
      resolve(JSON.stringify(person));
      }
      reject('Errore Person id');
    }, 1000);
  });
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      if (job) {
        resolve(JSON.stringify(job));
      }
      reject('Errore Job id');
    }, 1000);
  });
}

let personPromise = fetchPersonById(3);
personPromise
.then((id) => JSON.parse(id))
.then((person) => console.log(person));

let jobPromise = fetchJobById(3);
jobPromise
.then((id) => JSON.parse(id))
.then((job) => console.log(job));