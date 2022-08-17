const db = require('../../data/db-config');


function getAll() {
  return db('accounts');
}


const getById = id => {
  return db('accounts').where({ id });
}

// const create = account => {
// return db('accounts').insert(account)
// }

async function create(account) {
  const [id] = await db('accounts').insert(account)
  return await getById(id)
}

const updateById = (id, account) => {
  db('accounts').where('id', id).update(account)
}

async function deleteById(id) {

  const result = await getById(id);
  await db('accounts').delete().where('id', id);
return result;

}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
