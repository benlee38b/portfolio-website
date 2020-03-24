const contact = (req, res, next) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    next({ status: 400, msg: 'Bad Request' });
  } else {
    res.send({ msg: `Thanks for contacting me, ${name}` });
  }
};

module.exports = { contact };
