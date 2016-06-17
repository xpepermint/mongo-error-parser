module.exports = function(err) {
  var data = {
    name: err.name,
    message: err.message,
    code: err.code
  };

  switch (err.code) {
    case 11000:
      data.index = err.message.split('$', 2)[1].split(' ', 2)[0];
      data.message = 'duplicate key error';
      break;
  }

  return data;
};
