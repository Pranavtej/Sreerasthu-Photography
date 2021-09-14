//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "pranavteja10@gmail.com",
	Password : "chiini28",
	To : 'pranav_mcr@srkrec.edu.in',
	From : "lokesh_mcr@srkrec.edu.in",
	Subject : "subject",
	Body : "message",
	}).then(
		message => alert("mail sent successfully")
	);
}