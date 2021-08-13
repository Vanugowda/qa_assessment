**UI-Automation**

Please find the code snippets at **cypress->Integration/Assessment->qa_assessment1.js**

Below are the steps to explain How to configure and Run this Framework
The tech stack used for developing this framework are:
1.	**JAVASCRIPT** as the programming language for writing test code
2.	**Cypress** as the UI/frontend automation tool
3.	**Visual studio Code** as the preferred IDE for writing javaScript code.

**Getting Started**

Setup your machine.
1.	Install Visual studio Code
2.	Node  js
3.	Install Cypress and dependencies(For UI Automation)

**Steps to Execute Tests:**

**Step 1**: Clone the Project ahfarmer/calculator from Github.

**Step 2**: Navigate to the folder location in the terminal and enter
	        npm init 
          
**Step 3**: All possible dependencies are downloaded and a package.json file is created.

**Step 4**: Give npm start to run the project in local. The project should run on http://localhost:3000

**Step 5**: Further, use npm install cypress --save-dev so that cypress and all relevant dependencies are downloaded.

**Step 6**: Run npx cypress open to open & execute the tests in Test Runner | Run npx cypress run to execute the tests in CLI


**UI Automation is performed for below mentioned scenarios and the same has been uploaded in Github**

1.	Checking for the url
2.	Validating available numbers
3.	Validating Addition/Subtraction/Multiplication/Division Operation
4.	Validating for Decimal
5.	Testing AC
6.	Validating Sign Functions
 

**Below are the few Test Cases that can be validated:**
1.	When a number is divided by 0, there should be a error message saying “Can’t divide a number by 0”
2.	Checking for different combinations of positive and negative numbers. 
Say for example: -55+10 = -45 , -55-10 = -65
3.	Maximum number of digits that can be displayed on the display block.
4.	To test whether BODMAS is applied correctly in case of complex queries.
5.	Checking for the background colour, button size, padding and whether the text is readable.
6.	Checking the pressure required to press a button.
7.	When 2 operators are pressed one after the other, the latest one should override the previous operator.
