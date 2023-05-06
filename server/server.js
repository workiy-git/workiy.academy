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
      
            // Create a nodemailer transport object
            const transporter = nodemailer.createTransport({
              host: 'smtp.zoho.com',
              port: 465,
              secure: true,
              auth: {
                user: 'hr@workiy.ca',
                pass: 'Tamilnadu016@'
              }
            });
      
            // Compose the email message
            const mailOptions = {
              from: 'hr@workiy.ca',
              to: 'workiy.academy@gmail.com',
              subject: 'A NEW STUDENT REGISTRED IN WORKIY-ACADEMY',
              
              html: `<p>Hai sathis,</p><p>A new student has been Registred. Here are the details:</p><ul><li>Name: ${Name}</li><li>Email: ${Email}</li><li>Phone Number: ${Phone_Number}</li><li>Course: ${Course}</li><li>Message: ${Message}</li></ul>`
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
          user: 'hr@workiy.ca',
          pass: 'Tamilnadu016@'
        }
      });
      
      // Compose the email message
      const mailOptions1 = {
        from: 'hr@workiy.ca',
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
      
      
            res.sendFile(__dirname + '/public/welcome-student-page.html');
        });
      });



app.listen(4000, () => {
  console.log('serving at poart:4000')
});