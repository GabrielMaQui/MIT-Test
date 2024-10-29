import { describe, it, expect } from "vitest";
//import { getAllTask } from "./task.service";

const supertest = require('supertest');
const app = require('../../app');

//Probando el vitest
const request = supertest(app);

//API Test
describe('Task API ', () => {
  // GET ALL
  describe('getAllTask', async () => {
    it('Should return the all task ', async () => {

      //Arrange
      const rsp = 200;
      const expected = Array;
      //Act
      //el request va solo
      const response = await request.get('/api/tasks');
      //Assert
      expect(response.statusCode).toBe(rsp);
      expect(response.body).toBeInstanceOf(expected);
    });
  });

  describe('postTask', async () => {
    it('should submit the task', async () => {

      //Arrange
      const rsp = 201;
      const taskTest = {
        title: 'Task 4',
        description: 'Description 4',
        completed: false,
      }
      //Act

      const result = await request.post('/api/tasks/').send(taskTest);
      //Asset
      expect(result.statusCode).toBe(rsp);
    });
  });

  // Sin recibir el titulo
  describe('postTask', async () => {
    it('should reject submit the task', async () => {

      //Arrange
      const rsp = 400;
      const taskTest = {
        description: 'Description 4',
        completed: false,
      }
      //Act

      const result = await request.post('/api/tasks/').send(taskTest);
      //Asset
      expect(result.statusCode).toBe(rsp);
    });
  });

  //Actualizar task
  describe('putTask', async () => {
    it('should edit the a task', async () => {

      //Arrange
      const rsp = 200;
      const body = {
        describe: 'New Description 3'
      };
      const id = 2;
      //Act
      const result = await request.patch('/api/tasks/'+id).send(body);
      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  });

  //Buscar una task
  describe('oneTask', async () => {
    it('should get the a task', async () => {

      //Arrange
      const rsp = 200;
      const id = 2;
      //Act
      const result = await request.get('/api/tasks/'+id).send();
      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  })

  //eliminar una task
  describe('oneTask', async () => {
    it('should delete the a task', async () => {

      //Arrange
      const rsp = 204;
      const id = 2;
      //Act
      const result = await request.delete('/api/tasks/'+id).send();
      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  });

})
