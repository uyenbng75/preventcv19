const { database } = require("../config/db/");
const connect = require("../config/db/");
const db = connect.database();
const rooRef = db.ref("statistics");
class AdminControllers {
  // [GET] /news
  index(req, res) {
    rooRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const data2 = snapshot.author;
      var key = Object.keys(snapshot.val())[0];
      console.log(key)
      res.render("admin", { statistical: data });
    });
  }

  add(req, res) {
    const key = req.body.patient;
    const autoId = rooRef.push().key;
    rooRef.child(key).set({
      patient: req.body.patient,
      age: req.body.age,
      address: req.body.address,
      status: req.body.status,
      nationality: req.body.nationality,
    });
    res.redirect("admin");
  }

  update(req, res) {
    const newData = {
      age: req.body.age,
      address: req.body.address,
      state: req.body.state,
      nationality: req.body.nationality,
    }
    const patientID = req.params.id;
    rooRef.child(patientID).update(newData);
    res.redirect('back');
  }

  destroy(req, res) {
    const patientID = req.params.id;
    console.log(patientID);
    rooRef.child(patientID).remove();
    res.redirect('back');
  }

}

module.exports = new AdminControllers();
