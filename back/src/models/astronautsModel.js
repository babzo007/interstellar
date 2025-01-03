import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { DATA_FILE_PATH } from './constants.js';
import { randomUUID } from 'node:crypto';

if (!existsSync(DATA_FILE_PATH)) {
  writeFileSync(DATA_FILE_PATH, JSON.stringify([]));
}

export function readDataFile() {
  return JSON.parse(readFileSync(DATA_FILE_PATH));
}

export function saveDataToFile(data) {
  writeFileSync(DATA_FILE_PATH, JSON.stringify(data));
}

export function getAstronautsFromFile() {
  return readDataFile();
}

export function createAstronautToFile(body) {
  const astronauts = readDataFile();
  const { firstName, lastName } = body;

  if (!firstName || !lastName) {
    return res.status(400).send('First name and last name are required.');
  }

  const date = new Date().toISOString();
  const newAstronaut = {
    id: randomUUID(),
    firstName,
    lastName,
    createdAt: date,
    updatedAt: date,
  };

  astronauts.push(newAstronaut);
  saveDataToFile(astronauts);

  return newAstronaut;
}

export function updateAstronautToFile(params, body) {
  const { id } = params;
  const { firstName, lastName } = body;
  const astronauts = readDataFile();
  const astronaut = astronauts.find(a => a.id === id);

  if (!firstName || !lastName) {
    return res.status(400).send('firstName or lasName is required');
  }

  if (!astronaut) {
    return res.status(400).send(`Astronaut with id ${id} does not exist.`);
  }

  if (firstName) astronaut.firstName = firstName;
  if (lastName) astronaut.lastName = lastName;
  astronaut.updatedAt = new Date().toISOString();

  saveDataToFile(astronauts);

  return astronaut;
}

export function deleteAstronautToFile(params) {
  const { id } = params;
  const astronauts = readDataFile();

  const index = astronauts.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(400).send(`Astronaut with id ${id} does not exist.`);
  }

  astronauts.splice(index, 1);

  saveDataToFile(astronauts);

  return true;
}
