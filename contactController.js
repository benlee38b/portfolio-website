const sendMail = require('./sendMail');

const contact = (req, res, next) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    next({ status: 400, msg: 'Bad Request' });
  } else {
    sendMail(name, email, subject, message)
      .then(() => {
        res.render('contact', { name });
      })
      .catch(next);
  }
};

module.exports = { contact };
