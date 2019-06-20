const User = require("./models/user");

/*
User.forge({
  email: "angelorubin@gmail.com",
  paswword: "master77"
})
  .save()
  .then(function(user) {
    console.log(user.toJSON());
    // console.log(`O Usuário ${user} foi salvo com sucesso.`);
  });
  */

User.fetchAll().then(users => {
  const data = JSON.stringify(users);
  console.log(data);
});

/*
new User({ id: 2 })
  .destroy()
  .then(function(model) {
    console.log("Usuário apagado com sucesso.");
  })
  .catch(err => console.log(err));
*/
