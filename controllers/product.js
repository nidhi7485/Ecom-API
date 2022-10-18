const getAll = async (req, res) => {
  try {
    res.status(200).json({ msg: 'testing' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAll }
