// First initialise the helper object with the code, secret code 
// and the generic helper
var helper = new CBHelper("lab5", "0123456789abcdef0123456789", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("smoothbuckle12"));

// create an object to be inserted in our CloudBase instance,
// e.g a firstName, lastName and title into a collection called ‘users’
var dataObject = {
    "firstName" : "Niklas",
    "lastName" : "Nummelin",
    "title" : "Wizard"
};
 // use the insertDocument method to send the call and insert the data
// in the users collection then print out the response using the
// outputString property of the CBHelperResponseInfo object

helper.insertDocument("users", dataObject, null, function(resp) {
    hyper.log(resp.outputString);
});

var searchCondition = { "firstName" : "Niklas" };
// call the searchDocuments function
helper.searchDocuments(searchCondition,"users", function(resp) {
        // uncomment next row to get entire string
       // alert(resp.outputString);   
       
        if (resp.callStatus){       // if successful
            for (index in resp.outputData){
                var user = resp.outputData[index];
                alert (user.firstName + ' ' + user.lastName + ', ' + user.title);
            }
        }
    }
);
