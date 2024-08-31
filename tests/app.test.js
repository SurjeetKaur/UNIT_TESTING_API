const request = require('supertest')
const app = require("../app")

describe('API Endpoints', ()=>{
    // TEST 1: API TESTING "GET"
    it('It should return 200', async()=>{
        const res=await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
    });
    //TEST 2: RETURN VALID MESSAGE
    it('It should return valid message', async()=>{
        const res=await request(app).get('/api');
        expect(res.body).toHaveProperty('message');
    });
    
    //API TESTING "POST"
    /*Test 3:
   Purpose: Verifies that the API endpoint correctly creates new data.
   Steps:
     * Sends a POST request to `/api/data` with sample data.
     * Asserts that the response status code is 201 (Created).
     * Asserts that the response body contains the expected property `received` with the provided data.*/

    it('it should return statusCode 201(created)',async()=>{
        const res=await request(app)
        .post('/api/data')
        .send({data:"I live in Toronto"});
        expect(res.statusCode).toEqual(201);
    });
    //Asserts that the response body contains the expected property `received` with the provided data.
    it('it should respons with the expected property `received` with the provided data.',async()=>{
        const res=await request(app)
        .post('/api/data')
        .send({data:"I live in Toronto"});
        expect(res.body).toHaveProperty('received');   
    });
    
    //TEST 4:Purpose: Verifies that the API endpoint returns an error when no data is provided.
    /*Sends a POST request to `/api/data` without any data.
    Asserts that the response status code is 400 (Bad Request).
    Asserts that the response body contains an error message indicating that no data was provided.*/

    it('it should respond status code 400:Bad Request',async()=>{
        const res=await request(app)
        .post('/api/data')
        .send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty("error");
    });

    // Asserts that the response body contains an error message indicating that no data was provided.

    it('it should respond body with an error message indicating that no data was provided ',async()=>{
        const res=await request(app)
        .post('/api/data')
        .send({});
        expect(res.body).toHaveProperty("error");
    });
});
   

    

/*Assignment
1. Test 3:
   Purpose: Verifies that the API endpoint correctly creates new data.
   Steps:
     * Sends a POST request to `/api/data` with sample data.
     * Asserts that the response status code is 201 (Created).
     * Asserts that the response body contains the expected property `received` with the provided data.
 
2. Test 4:
   Purpose: Verifies that the API endpoint returns an error when no data is provided.
   Steps:
     * Sends a POST request to `/api/data` without any data.
     * Asserts that the response status code is 400 (Bad Request).
     * Asserts that the response body contains an error message indicating that no data was provided.
 
*/
