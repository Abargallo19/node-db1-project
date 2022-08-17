const Accounts = require('./accounts-model')
//{ getAll }
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const allAccounts = await Accounts.getAll()
    return res.status(200).json(allAccounts)
  } catch (err) {
    res.status(500).json({message: 'Somethings wrong'})
    next(err)
  }

})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC

})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
  })
})

module.exports = router;
