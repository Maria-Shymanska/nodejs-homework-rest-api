const express = require('express');


const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const ctrl = require('../../controllers/contacts');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById

const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const {
  getAll,
  getById,
  add,
  updateById,
  updateFavorite,
  deleteById,
} = require('../../controllers/contacts');

const router = express.Router();

router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', validateBody(schemas.addSchema), add);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  updateById

);

router.patch(
  '/:contactId/favorite',

  authenticate,
  isValidId,
  validateBody(schemas.favoriteSchema),
  ctrl.updateFavorite
);

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById);

  isValidId,
  validateBody(schemas.favoriteSchema),
  updateFavorite
);

router.delete('/:contactId', isValidId, deleteById);

module.exports = router;
