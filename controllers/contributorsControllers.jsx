let express = require("express");
let path = require("path");
let router = express.Router();
let fs = require("fs");

let db = require("../models")
let holder = require("../models/Contributor.jsx");
let contributor = require("../models/Mcontributor.jsx");

router.get("/api/contributors", function(req, res) {
  console.log(req.body);
  contributor.find({}, (err, contributor) => {
    if (err) {
      res.send(err);
    }
    res.json(contributor);
    // res.json();
    // res.sendFile(path.join(__dirname, "../public/catalog.html"));
  });
});

// Post a contributor to the mongoose database
router.post("/api/contributors", (req, res) => {
  console.log(req.body);
    // console.log(req);
    

  // Save the request body as an object called record
  let record = {
    // _id: req.body.id,
      title: req.body.title,
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      number_of_shares_purchased: req.body.number_of_shares_purchased,
      bank_name: req.body.bank_name,
      bank_account_number: req.body.bank_account_number,
      bvn: req.body.bvn,
      name_of_next_of_kin: req.body.name_of_next_of_kin,
      relationship_to_nok: req.body.relationship,
      address_of_nok: req.body.address_of_nok,
      phoneNumber_of_Nok: req.body.phoneNumber_of_nok,
      email_of_nok: req.body.email_of_nok,
      creation_date: req.body.creation_date
  };
  console.log(record);

  contributor.create(record)
    .then(function(item) {
      // Show any errors
      item = record;
      console.log(item);
    })
    .catch(function(err) {
      console.log(err.message);
    });
});

router.put("api/contributors/:_id", (req,res) => {
      let condition = "id = " + req.params._id;
      console.log("condition", condition);
      let record = {
        // _id: req.body.id,
          title: req.body.title,
          name: req.body.name,
          address: req.body.address,
          phone_number: req.body.phone_number,
          email: req.body.email,
          number_of_shares_purchased: req.body.number_of_shares_purchased,
          bank_name: req.body.bank_name,
          bank_account_number: req.body.bank_account_number,
          bvn: req.body.bvn,
          name_of_next_of_kin: req.body.name_of_next_of_kin,
          relationship_to_nok: req.body.relationship,
          address_of_nok: req.body.address_of_nok,
          phoneNumber_of_Nok: req.body.phone_number_of_nok,
          email_of_nok: req.body.email_of_nok,
          creation_date: req.body.creation_date
      };

      contributor.update(record, condition, (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })

});

router.delete("api/contributors/:_id", (req,res) => {
  let condition = "id = " + req.params._id;
    contributor.remove(condition, (result) => {
      if (result.affectedRows === 0) {
        console.log(res)
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

    })
});

//************************ */
// mySql
//************* */

router.get("/api/members", function(req, res) {
  console.log(req.body)
  holder.all( (data) => {
   let participant = {
      participants: data
    }
    console.log(participant)
    res.json(participant);
    // res.json();
    // res.sendFile(path.join(__dirname, "../public/catalog.html"));
  });
});

// Post a beat to the mongoose database
router.post("/api/members", (req, res) => {
  console.log(req.body);
    // console.log(req);
    

  // Save the request body as an object called record
  let record = {
    // _id: req.body.id,
    title: req.body.title,
    name: req.body.name,
    address: req.body.address,
    phone_number: req.body.phone_number,
    email: req.body.email,
    number_of_shares_purchased: req.body.number_of_shares_purchased,
    bank_name: req.body.bank_name,
    bank_account_number: req.body.bank_account_number,
    bvn: req.body.bvn,
    name_of_next_of_kin: req.body.name_of_next_of_kin,
    relationship_to_nok: req.body.relationship,
    address_of_nok: req.body.address_of_nok,
    phoneNumber_of_Nok: req.body.phone_number_of_nok,
    email_of_nok: req.body.email_of_nok,
    creation_date: req.body.creation_date
  };
  console.log(record);

  holder.create(record, (result) => {
    res.json({ id: result.insertId })
  })
    // .then(function(item) {
    //   // Show any errors
    //   item = record;
    //   console.log(item);
    // })
    // .catch(function(err) {
    //   console.log(err.message);
    // });
});

router.put("api/members/:_id", (req,res) => {
  let condition = "id = " + req.params._id;
  console.log("condition", condition);

  holder.update()

});

router.delete("api/members/:_id", (req,res) => {

  holder.delete()
});




//************************** */

module.exports = router;
