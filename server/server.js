const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static('public'));



// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student_registration_form'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to MySQL database...');
});

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: false }));

app.post('/upload', (req, res) => {
  const { Name,  Email, Phone_Number, Course, Message } = req.body;
  const sql = `INSERT INTO registration_form (Name,  Email, Phone_Number, Course, Message) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [Name,  Email, Phone_Number, Course, Message], (err, result) => {
      if (err) {
          throw err;
      }
      console.log('Data inserted successfully!');

      // Fetch email and password from the credentials table in the database
const credentials = "SELECT Email_from, Email_to, Password FROM credentials";
db.query(credentials, (error, results) => {
  if (error) {
    console.log(error);
    return;
  }

  // Extract the email and password from the query results
  const Email_from = results[0].Email_from;
  const Email_to = results[0].Email_to;
  const Password = results[0].Password;
      
            // Create a nodemailer transport object
            const transporter = nodemailer.createTransport({
              host: 'smtp.zoho.com',
              port: 465,
              secure: true,
              auth: {
                user: Email_from,
                pass: Password
              }
            });
      
            // Compose the email message
            const mailOptions = {
              from: Email_from,
              to: Email_to,
              subject: 'A NEW STUDENT REGISTRED IN WORKIY-ACADEMY',
              
              html: `<p>Hai Team,</p><p>A new student has been Registred. Here are the details:</p><ul><li>Name: ${Name}</li><li>Email: ${Email}</li><li>Phone Number: ${Phone_Number}</li><li>Course: ${Course}</li><li>Message: ${Message}</li></ul>`
            };
      
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });

                
      // Create a nodemailer transport object
      const transporter1 = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
          user: Email_from,
          pass: Password
        }
      });
      
      // Compose the email message
      const mailOptions1 = {
        from: Email_from,
        to: Email, // Use the Email field from the form data
        subject: 'Welcome to Workiy Academy!',
              
        html: `<p>Hello ${Name},</p><p>Thank you for register the ${Course} course at Workiy Academy. We're excited to have you onboard and can't wait to help you achieve your learning goals.</p><p>If you have any questions or concerns, feel free to reply to this email and Phone : 9342483624 we'll get back to you as soon as possible.</p><p>Best regards,</p><p>The Workiy Academy Team</p>`
      };
      
      // Send the email
      transporter1.sendMail(mailOptions1, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
      
            
        });
      });
    });


app.listen(3000, () => {
  console.log('serving at poart:3000')
});