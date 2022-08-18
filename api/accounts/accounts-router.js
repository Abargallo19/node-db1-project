const { checkAccountId, checkAccountPaylod } = require('./accounts-middleware')
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
    const [fetchedAccount] = await Accounts.getById(req.params.id)
    if (!fetchedAccount)
      return res.status(404).json({ message: 'account not found' })
    return res.json(fetchedAccount)
  } catch (error) {
    res.status(500).json({ message: 'Somethings wrong' })

  }
  next()
})

router.post('/', async (req, res, next) => {

  // try {
  //   res.json('post account')
  // } catch (error) {
  //   next(error)
  // }

try {
  const data = await Accounts.create(req.body)
  res.json(data)
} catch (error) {
  next(error)
}
// try {
//   const { name, budget } = req.body;
// const newAccount = Accounts.insert({name , budget})
// if(!name || !budget){
//   res.status(400).json({message: "missing some stuff"})
// } else{
//   res.status(201).json(newAccount)
// }

// } catch (error) {

// }

})

router.put('/:id', (req, res, next) => {
  const  changes  = req.body;
  Accounts.updateById(req.params.id, changes)
  .then(updatedAccount => {
    if(!updatedAccount) {
      res.status(404).json({message: 'Doesnt exist'})
    } else if (!updatedAccount.name || !updatedAccount.budget) {
      res.status(400).json({message: 'Need some info bucko'})
    } else{
      res.status(200).json(updatedAccount)
    }
  })
  .catch(() => {
    next()
    // res.status(500).json({message: 'We Need a new server'})
  })




  // try {
  //   res.json('update account')
  // } catch (error) {
  //   next(error)
  // }
});

router.delete('/:id',  async (req, res, next) => {
  try {
    const killSwitch = await Accounts.getById(req.params.id)
    if (!killSwitch) {
      res.status(404).json({ message: 'whoa! that ID doesnt exist' })
    } else {
      await Accounts.deleteById(req.params.id)
      res.status(404).json({ message: 'account not found' })
    }
    // res.json(killSwitch)
  } catch (error) {
    
    res.status(500)
  }
next()

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
