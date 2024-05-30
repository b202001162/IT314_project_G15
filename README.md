# IT314_project_G15

## Opensource Conference Management System

### Agenda
This time, in addition to the task already accomplished (i.e. the Homepage), we proposed to make a Login/Sign-up system for the user to create an account. Additionally, significant changes have been made to the backend portions.

### Features
➢	Classic home page with navigation bar and footer.
➢	Details of lecturers/speakers that are participating in the  conference.
➢	Display the details about the sponsors of the event.
➢	Display the organization's social media handle.
➢	Schedule Timeline
➢	Mail Auto-generation
➢	Registration Fee Payment portal
➢	Editable Navigation bar
➢	Feedback system
➢	An Archives section that stores data/details of previous years conferences

### Front-end
➢	For the Homepage, an additional button for Login and signup was included.
➢	A comment section was included for visitors to drop in remarks.
➢	Some other cosmetic changes were also made regarding the design and the background.
➢	Add social media handles to follow the events.

![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/60b76abc-2d3f-402e-8732-c7fb22cb2780)
![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/25ac9cfa-8ebf-456c-92ae-29725c0cf5c0)
![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/fd2b4e24-4285-4582-9699-3d5a77f570b8)
A screenshot of the new Homepage

➢	Next, the ‘Timeline page was designed. The Timeline page will show a brief history of the conferences held over the past years.
![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/d4e6411f-afae-4a7e-9350-0f38acdc7791)
A screenshot of the Timeline page

➢	Then, We designed the Login and the Signup page for users.
![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/fdadf29e-dff6-4a60-abcd-8bb70b33c7f7)
A screenshot of the Sign Up page

![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/9455ca8c-e49a-4c53-9b58-b85d25373e61)
A screenshot of the Login page

➢	We also made a page for resetting the password.
![image](https://github.com/b202001162/IT314_project_G15/assets/86399274/3ec55173-3e19-4780-a2e4-1aa51bcf2032)
A screenshot of the password reset page

### Back-end

➢	Instead of using Django, for Backend we used Node.js and MongoDB. MongoDB uses NoSQL for its database. This is more flexible.
➢	Also, Node.js and MongoDB gel well while we integrate websites.
➢	For login/sign-up security, we used the JWT (JSON web token), which produces a secret key to authenticate a user’s login credentials.
➢	For password validation, we used Validator.
➢	There are two interfaces for the website: User and Organization. For Login/Sign-up, we provided 2 options for the user: the Attendee and the Admin.
➢	The attendee shall participate in the conferences while the Admin shall approve the same.

  ### Website deployed at:
  https://it-314-project-g15.vercel.app/
