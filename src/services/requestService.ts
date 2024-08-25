// src/services/requestService.ts
import { Request, Response } from 'express';
import { Worker } from 'worker_threads';
import path from 'path';

class RequestService {
    async dummyRequest(req: Request, res: Response): Promise<void> {
        try {
            const { user_id, book_title, book_author, justification } = req.body;
            res.status(201).json({ message: 'Request submitted successfully' });
        } catch (error) {
            console.error('Error in submitRequest:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async expensiveRequest(req: Request, res: Response): Promise<void> {
        const startTime = new Date().getTime();
        const worker = new Worker(path.join(__dirname, '../utils/threadWorker.js'));
        worker.on('message', (result) => {
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;

            res.status(200).json({
                message: 'Expensive request completed',
                time: `Time taken: ${timeTaken} seconds`,
                result: result
            });
        });

        worker.on('error', (error) => {
            console.error('Error in worker:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }
}
export default RequestService;

