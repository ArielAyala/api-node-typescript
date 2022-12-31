import { Router, Request, Response } from 'express';

const router = Router();

router.get('/items', (req: Request, res: Response) => {
    res.send({ data: 'Test'});
})

export { router };