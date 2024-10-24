import { describe, it, expect } from "vitest";
import { getAllTask } from "./task.service";

//const request = require('supertest');
//const app = require('../app'); // Adjust to your project structure



//Probando el vitest
describe('Task API ', () => {
  describe('getAllTask', () => {
    it('Should return the Array ', async () => {

      //Arrange
      const expected = Array

      //Act
      const result = getAllTask();

      //Assert
      expect(result).toBeInstanceOf(expected);
    });
  })
})
