import {
  createAstronautToFile,
  deleteAstronautToFile,
  getAstronautsFromFile,
  updateAstronautToFile,
} from '../models/astronautsModel.js';

export function getAstronauts(_, res) {
  const astronauts = getAstronautsFromFile();
  res.send(astronauts);
}

export function createAstronaut(req, res) {
  const newAstronaut = createAstronautToFile(req.body);
  res.send(newAstronaut);
}

export function updateAstronaut(req, res) {
  const updatedAstronaut = updateAstronautToFile(req.params, req.body);
  res.send(updatedAstronaut);
}

export function deleteAstronaut(req, res) {
  deleteAstronautToFile(req.params);
  return res.send(true);
}
