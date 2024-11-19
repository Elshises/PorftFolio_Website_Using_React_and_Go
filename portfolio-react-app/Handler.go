package main

import	(

		"fmt"
		"net/http"
		"net/smtp"
	
	)
	

	

func contactHandler(
	
http.ResponseWriter, r ,
*http.Request,




)  {


	if r.Method == "POST" {

		r.ParseForm()

		name :=r.ForValue("name")
		email :=r.ForValue("email")
		message := r.ForValue("message")

		sendEmail(name, email,message)

		fmt.FPrint(w,"Thank you ,%s Your message has been sent.",name)
	}

	else{

		http.ServerFile(w,r,"Contactme.jsx")
		
	}

		

			
		
	}

	func sendMail(name,email,message String){

		from := email
		password :="Elshises.Kugwikana@254"

		to := "elshisesmburu@gmail.com"

		msg :=fmt.SPrint("From:%s\nTo: %s\nSubject: New Contact Form Submission\n\nName: %s\nEmail: %s\nMessage: %s",email,to,name,message)

		auth :=smtp.PlainAuth("",from,password,"smtp.gmail.com")

		err :=
			smtp.sendEmail("smtp.gmail.com:",auth,from,[]string{to},[]byte(msg))
						if err != nil {

							fmt.Println("Error sending Email: ",err)
						}
	}

	func main(){
		http.HandlerFunc("/submit-contact",contactHandler)
		http.ListenAndServe(":8080",nil)
	}
