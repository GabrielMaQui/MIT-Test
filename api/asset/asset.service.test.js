import { describe, it, expect } from "vitest";

const supertest = require('supertest');
const app = require('../../app');

//Probando el vitest
const request = supertest(app);

//API Test
describe('Asset API ', () => {
  // GET ALL
  describe('getAllAssets', async () => {
    it('Should return the all assets ', async () => {

      //Arrange
      const rsp = 200;
      const expected = Array;
      //Act
      //el request va solo
      const response = await request.get('/api/assets');
      //Assert
      expect(response.statusCode).toBe(rsp);
      expect(response.body).toBeInstanceOf(expected);
    });
  });

  describe('postAsset', async () => {
    it('should reject submit the assets', async () => {

      //Arrange
      const rsp = 201;
      const body = {
        name: 'Asset 3',
        price: 350,
        slug: 'asset-3',
        image: 'https://via.placeholder.com/150',
        tokenAssetAddress: 'BW7AjDhWJmdH7fsf8s7UkSaYm5CtvmUDjm5V7xy4jakh',
        createdAt: '2022-01-01T00:00:00.000Z',
        updatedAt: '2022-01-01T00:00:00.000Z',
      }
      //Act
      const result = await request.post('/api/assets/').send(body);
      //Asset
      expect(result.statusCode).toBe(rsp);
    });
  });

  describe('putAsset', async () => {
    it('should edit the a asset', async () => {
      //Arrange
      const rsp = 200;
      const body = {
        price: 300
      };

      const id = '1';

      //Act
      const result = await request.patch('/api/assets/'+ id).send(body);

      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  });

  describe('oneAsset', async () => {
    it('should edit the a asset', async () => {

      //Arrange
      const rsp = 200;
      const id = '2';
      //Act
      const result = await request.get('/api/assets/'+ id).send();
      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  })

   //eliminar una asset
   describe('deleteAsset', async () => {
    it('should delete the a asset', async () => {

      //Arrange
      const rsp = 204;
      const id = '2';
      //Act
      const result = await request.delete('/api/assets/'+ id).send();
      //Asset
      expect(result.statusCode).toBe(rsp);
    })
  })

})
