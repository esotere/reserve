$(function() {
  //**************************************** */
  // format date in html
  //************************* */

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  console.log(today);
  $("#date").attr("min", today);

  //************************************** */
  let nameInput = $("#name");
  let customer = {
    title: $("#title")
      .val()
      .trim(),
    name: $("#name")
      .val()
      .trim(),
    address: $("#address")
      .val()
      .trim(),
    phoneNumber: $("#phone")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    number_of_shares_purchased: $("#nosp")
      .val()
      .trim(),
    bank_name: $("#bank")
      .val()
      .trim(),
    bank_account_number: $("#acct")
      .val()
      .trim(),
    bvn: $("#bvn")
      .val()
      .trim(),
    name_of_next_of_kin: $("#name_nok")
      .val()
      .trim(),
    relationship: $("#relationship")
      .val()
      .trim(),
    address_of_nok: $("#address_nok")
      .val()
      .trim(),
    phoneNumber_of_nok: $("#phone_nok")
      .val()
      .trim(),
    email_of_nok: $("#email_nok")
      .val()
      .trim(),
    creation_date: $("#date")
      .val()
      .trim()
  };
  let newTr = $("<tr>");
    newTr.data("customer", customer);



  let info = [];
  
  let retrieve = () => {

  $.ajax({
    url: "/api/contributors",
    method: "GET",
    contentType: "application/x-www-form-urlencoded",
    headers: {
      "Content-Type": "application/json"
    }

    //   success: function (data){
    //     alert('Success ' + data);
    // }
  }).then((response) => {
    let result = response;
    console.log(result);
    info.push(result);
    console.log(info);
    console.log(info[0]);
    // console.log(info[0][0]._id)
    let records = info[0].map(r => {
      // let items = r;
      return r;
    })
    console.log(records);
 

    // records.forEach(record => {
      // $("#data").prepend(JSON.stringify(info))
      $("#data").append( "<table class='table table-dark'>" +
      '<thead class="thead thead-dark">' +
      '<tr>'+
      '<th scope="col">' + 'ID' + '</th>' +
      '<th scope="col">' + 'Title' + '</th>' +
        '<th scope="col">' + 'Name' + '</th>' +
        '<th scope="col">' + 'Address' + '</th>' +
        '<th scope="col">' + 'Phone Number' + '</th>' +
        '<th scope="col">' + 'Email' + '</th>' +
        '<th scope="col">' + 'Number Of Shares' + '</th>' +
        '<th scope="col">' + 'Bank Name' + '</th>' +
        '<th scope="col">' + 'Bank Account Number' + '</th>' +
        '<th scope="col">' + 'BVN' + '</th>' +
        '<th scope="col">' + 'Name Of Next Of Kin' + '</th>' +
        '<th scope="col">' + 'Relationship Of Next Of Kin' + '</th>' +
        '<th scope="col">' + 'Address Of Next Of Kin' + '</th>' +
        '<th scope="col">' + 'Phone Number Of Next Of Kin' + '</th>' +
        '<th scope="col">' + 'Email Of Next Of Kin' + '</th>' +
        '<th scope="col">' + 'Date' + '</th>' +
        // '<th scope="col">' + 'Rate' + '</th>' +
        '</tr>' +
        '</thead>' )
        
        records.forEach(record => {
          var newTr = $("<tr>");
         newTr.data("customer", record);

          $(".table").append("<tbody>").append(
          
          newTr.append(
          "<td>" + record._id  + "</td>" +
          "<td>" + record.title  + "</td>" +
          "<td>" + record.name  + "</td>" +
          "<td>" + record.address  + "</td>" +
          "<td>" + record.phoneNumber  + "</td>" +
          "<td>" + record.email  + "</td>" +
          "<td>" + record.number_of_shares_purchased  + "</td>" +
          "<td>" + record.bank_name  + "</td>" +
          "<td>" + record.bank_account_number  + "</td>" +
          "<td>" + record.bvn  + "</td>" +
          "<td>" + record.name_of_next_of_kin  + "</td>" +
          "<td>" + record.relationship  + "</td>" +
          "<td>" + record.address_of_nok  + "</td>" +
          "<td>" + record.phoneNumber_of_nok  + "</td>" +
          "<td>" + record.email_of_nok  + "</td>" +
          "<td>" + record.creation_date  + "</td>" +
          "<td>" +
          "<button id='' class='btn btn-warning btn-sm update'>" +
          "Update" +
          "</button>" +
          "</td>" +          
          "<td>" +
          "<button id='' class='btn btn-danger btn-sm delete'>" +
          "Delete" +
          "</button>" +
          "</td>" 
          ) 
          // }) +       
          // '</tbody>' +
          
          // '</table>'
      );
    })
    
  });
  
  $.ajax({
    url: "/api/members",
    method: "GET",
    contentType: "application/x-www-form-urlencoded/json"
    // headers: {
      //   "Content-Type": "application/json"
      // }
    }).then(data => {
      console.log(data);
    });
  }
  
  $("#retrieve").on("click", e => {
    e.preventDefault;
    $("#data").empty();

    retrieve();
    console.log(info);
    

    // $("#data").append(info);

  });
  // console.trace()

  let post = (customer) => {
     customer = {
      title: $("#title")
        .val()
        .trim(),
      name: $("#name")
        .val()
        .trim(),
      address: $("#address")
        .val()
        .trim(),
      phoneNumber: $("#phone")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      number_of_shares_purchased: $("#nosp")
        .val()
        .trim(),
      bank_name: $("#bank")
        .val()
        .trim(),
      bank_account_number: $("#acct")
        .val()
        .trim(),
      bvn: $("#bvn")
        .val()
        .trim(),
      name_of_next_of_kin: $("#name_nok")
        .val()
        .trim(),
      relationship: $("#relationship")
        .val()
        .trim(),
      address_of_nok: $("#address_nok")
        .val()
        .trim(),
      phoneNumber_of_nok: $("#phone_nok")
        .val()
        .trim(),
      email_of_nok: $("#email_nok")
        .val()
        .trim(),
      creation_date: $("#date")
        .val()
        .trim()
    };

    $.ajax("/api/contributors", {
      method: "post",
      data: customer,
      dataType: "json"
    }).then(function() {
      console.log("record created");
    });

    $.ajax("/api/members", {
      method: "post",
      data: customer,
      dataType: "json"
    }).then(function() {
      console.log("record created");
    });
  };

  let del = (event) => {
    event.stopPropagation();

    let newTr = $("tbody");
    // newTr.data("customer", record);
    // console.log(newTr)

    
    let listItemData = $(this).parent("td").parent("tr").parent("tbody").data("customer");
    console.log(this);
    console.log(data);
    console.log(listItemData);
    // let id = listItemData;
      let id = $(event.currentTarget).parent("tbody").data("customer");
      // let id = $(this).data("customer")
      console.log(id);
    $.ajax({
      url: "/api/contributors/" + id,
      method: "DELETE"
    }).then(retrieve)
  }

  let amend = () => {
    $.ajax("/api/contributors", {
      method: "PUT"
    })
  }

  $("#submit").on("click", e => {
    e.preventDefault();
    if (!nameInput.val().trim().trim()) {
      return;
    }
    post();
    console.log("submitted");
  });

  
  
  $(document).on("click", "button.delete", del);
  $(document).on("click", "button.update", amend);
  
  
  // var table = document.querySelector('table');
  // // delete the click event to the table
  // $(".delete").on('click', handleRowAction);
  

  // function handleRowAction(e) {
  //   var target = e.target;
  //   // if the click node is not the delete button, then exit
  //   if (!target.matches('.del-button')) {
  //     return;
  //   }
  //   // I believe, you can replace the line below for
  //   // table.deleteRow(target.closest('tr').rowIndex), since they are
  //   // equivalent
  //   table.deleteRow(target.parentNode.parentNode.rowIndex);
  // }


});
