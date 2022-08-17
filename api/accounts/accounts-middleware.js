
const AccountMod = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  const fetchedAccount =  Accounts.getById(req.params.id)
 
  if(!fetchedAccount){
    res.status(404).json({message: 'sorry this ID doesnt exist'})
  } else {
    return res.status(200).json(fetchedAccount)
  }

 next()
  

  // DO YOUR MAGIC
}
