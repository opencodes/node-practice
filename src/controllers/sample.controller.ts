import sampleModel from '../models/sample.model';

// Create and Save a new sample
exports.create = (req: any, res: any) => {
  // Validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'sample name can not be empty',
    });
  }

  // Create a sample
  const sample = new sampleModel({
    title: req.body.title || 'Untitled',
    createdAt: new Date(),
  });

  // Save sample in the database
  sample
    .save()
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the sample.',
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req: any, res: any) => {
  sampleModel
    .find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: {message: any}) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notes.',
      });
    });
};

// Find a single note with a sampleId
exports.findOne = (req: any, res: any) => {
  sampleModel
    .findById(req.params.sampleId)
    .then((note: any) => {
      if (!note) {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      res.send(note);
    })
    .catch((err: any) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.params.sampleId,
      });
    });
};

// Update a note identified by the sampleId in the request
exports.update = (req: any, res: any) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'sample title can not be empty',
    });
  }

  // Find note and update it with the request body
  sampleModel
    .findByIdAndUpdate(
      req.params.sampleId,
      {
        title: req.body.title || 'Untitled sample',
        createdAt: new Date(),
      },
      {new: true},
    )
    .then((note: any) => {
      if (!note) {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      res.send(note);
    })
    .catch((err: any) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      return res.status(500).send({
        message: 'Error updating note with id ' + req.params.sampleId,
      });
    });
};

// Delete a note with the specified sampleId in the request
exports.delete = (req: any, res: any) => {
  sampleModel
    .findByIdAndRemove(req.params.sampleId)
    .then((note: any) => {
      if (!note) {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      res.send({message: 'sample deleted successfully!'});
    })
    .catch((err: any) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'sample not found with id ' + req.params.sampleId,
        });
      }
      return res.status(500).send({
        message: 'Could not delete note with id ' + req.params.sampleId,
      });
    });
};
