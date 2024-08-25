// requestRoutes.ts
import express from 'express';
import RequestService from '../services/requestService';
const requestRoutes = express.Router();
const requestService = new RequestService()
requestRoutes.get('/get', requestService.dummyRequest);
requestRoutes.get('/expensive', requestService.expensiveRequest);
// requestRoutes.get('/get', requestManager.getRequests);
// requestRoutes.post('/update/:requestId/approve', requestManager.updateRequest);
// requestRoutes.post('/update/:requestId/reject', requestManager.updateRequest);
// Add other routes as needed
export default requestRoutes;

