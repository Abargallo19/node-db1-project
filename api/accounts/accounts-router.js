const { checkAccountId } = require('./accounts-middleware')
const Accounts = require('./accounts-model')
//{ getAll }
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const allAccounts = await Accounts.getAll(req.body)
    return res.status(200).json(allAccounts)
    
  } catch (err) {
    res.status(500).json({ message: 'Somethings wrong' })
    next(err)
  }
  console.log(req.body)
})
// res.status(404).json({  });
router.get('/:id', async (req, res, next) => {
  try {
    const  [ fetchedAccount ] = await Accounts.getById(req.params.id)
    if (!fetchedAccount) 
    return res.status(404).json({message: 'account not found'})
return res.json(fetchedAccount)
  } catch (error) {
    res.status(500).json({ message: 'Somethings wrong' })
    
  }
next()
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  try {
    const killSwitch = await Accounts.deleteById(req.params.id)
    res.json(killSwitch)
  } catch (error) {
    next(error)
    // res.status(500)
  }


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
