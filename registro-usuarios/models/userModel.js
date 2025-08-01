const db = require('../database');

const User = {
  create: (name, email, callback) => {
    const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    stmt.run(name, email, function(err) {
      callback(err, { id: this.lastID, name, email });
    });
    stmt.finalize();
  },

  findAll: (callback) => {
    db.all("SELECT * FROM users", callback);
  }
};

module.exports = User;