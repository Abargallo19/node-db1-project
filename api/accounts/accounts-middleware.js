
const accountMod = require('./accounts-model');

function checkAccountPayload(req, res, next) {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if (!req.body.name || ! req.body.budget) {
    res.status(400).json({message: "name and budget are required" })
  } else if(req.body.name.trim() < 3 || req.body.name.trim() > 10) {
res.status(400).json({message: "name of account must be between 3 and 100"})
  }else {
    res.status(200)
  }

}

function checkAccountNameUnique(req, res, next) {
  // DO YOUR MAGIC
  // accountMod.getById(req.newAccount.name)
}

function checkAccountId(req, res, next) {
  const fetchedAccount = accountMod.getById(req.params.id)
  if (!fetchedAccount) return res.status(404).json({ message: 'sorry this ID doesnt exist' })
  next()




  // DO YOUR MAGIC
}

module.exports = checkAccountId, checkAccountNameUnique, checkAccountPayload
