import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
  res.send({
    param: req.params,
    body: req.body,
    query: req.query,
  });
});
app.post('/', (req: any, res: any) => {
  res.send({
    param: req.params,
    body: req.body,
    query: req.query,
  });
});

app.listen(5000, () => {
  console.log(' Listning on port 5000');
});
