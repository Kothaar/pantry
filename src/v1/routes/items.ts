import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any): void => {
  res.send({ data: 'data' });
});
router.post('/', (req: any, res: any): void => {
  res.send({ data: 'data' });
});
router.get('/:id', (req: any, res: any): void => {
  try {
    let results: number = req.params.id;
    res.send({ data: `data ${results}` });
  } catch (e) {
    res.send(e);
  }
});
router.delete('/:id', (req: any, res: any): void => {
  res.send({ data: 'data' });
});
router.put('/:id', (req: any, res: any): void => {
  res.send({ data: 'data' });
});

module.exports = router;
