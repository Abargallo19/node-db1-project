
const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
 
  const error = { status: 400 }
  const { name, budget } = req.body
  if (name === undefined || budget === undefined) {
    error.message = 'name and budget are required'
    next(error)
  } else if(typeof name != 'string'){
    error.message = 'name and budget are required'
    next(error)
  } else if(name.trim() < 3 || name.trim() > 10){
    error.message = 'name of account must be between 3 and 100'
    next(error)
  } else if(typeof budget !== 'number' || isNaN(budget)){
    error.message = 'budget of account must be a number'
    next(error)
  } else if(budget < 0 || budget > 1000000){
    error.messgae = 'budget of account is too large or too small'
    next(error)
  }
};

exports.checkAccountNameUnique = (req, res, next) => {


  Accounts.getById(req.newAccount.name)
    .then(result => {
      if (result != null) {
        res.status(400).json({ message: "name must be unique" })
        return;
      }
      next()
    })
    .catch(error => next(error))



  next()

  // accountMod.getById(req.newAccount.name)
}

exports.checkAccountId = async (req, res, next) => {
  // const fetchedAccount = accountMod.getById(req.params.id)
  // if (!fetchedAccount) return res.status(404).json({ message: 'sorry this ID doesnt exist' })
  // next()
  try {
    const account = await Accounts.getById(req.params.id)
    if (!account) {
      next({ status: 404, message: 'not found' })
    } else {
      req.account = account
      next()
    }
  } catch (error) {
    next(error)
  }
}
