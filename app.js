var  contact = [{
  name:"Mom",
  lastName:"NA",
  phoneNumber:"1234567890",
  RemindFreq:"once a week"
},
{
  name:"Dad",
  lastName:"NA",
  phoneNumber:"12345",
  RemindFreq:"twice a week"
}]

$(document).ready(function(){
   $('input[name="name"]').val(contact[1]['lastName']);
});
