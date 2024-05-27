      ___   
     /  /\  
    /  /::\ 
   /  /:/\:\
  /  /:/~/:/
 /__/:/ /:/ 
 \  \:\/:/  
  \  \::/   
   \  \:\   
    \  \:\  
     \__\/  OLYTECHNIC


Pre requisites:

- Vscode:
	  PlatformIo (Download from extensions within).

- Node JS (Follow platform specific instructions).


🗂️ Create Project Folder

Open Vscode

Drag and drop folder into vscode
(Click trust)

OR )

Open cmd

Navigate to your project directory:
$cd ~/path/to/your/projects

Create project folder:
$mkdir “GoogleAiVisionTest”

Change to created folder
$cd “GoogleAiVisionTest”

Open project folder in VsCode: 
$code .

Open terminal in vscode use the terminal tab of the window title bar:

🗂️ Create 3 folders:

	server
	client
	esp32s3(feel free to replace with your actual board)

＄ From the terminal:
$mkdir "server"
$mkdir "client"
$mkdir "esp32s3"

🗂️ change directory to server
$mkdir "server"

Create package.json file with:
$npm init
    for entry point server.js
    for test test.js

🍦 Install express:
$npm install express

🗂️ create file in server/server.js
$touch server.js

add the following contents to the file:
  import express from "express";
  
  const app = express();
  const PORT = 3000;

  app.get("/", (req, res) => {
    res.send("Hello from Express!");
  });

  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
  });


🥳 Run the server:
$node server.js

  your sever will be available at:http://localhost:3000
 
// Install google cloud package:
$npm install –-save @google-cloud/vision

To proceed you need to have create a porject in google cloud console. 
🚨 You will need a valid payment method, but you will not be charged 
  (there is a limit to everything  but the free tokens are more than adequate for our use). 

You will need to create a project and enable vision api. 

► You will also need to create a service account for authentication for the project. 

䷾ Once the project is created and vision api is enabled. ⤵

✴ From the project dashboard navigate to API's and services.
    Select credentials from the side car from there you should be able to create a service account
    For the prompts in creating a service account:
    choose a name - the account name will be generated using this
    Description: Authentication for node server
    basic
      owner
    continue x2
    done ✅


🚨 Set application credentials
  For windows:
  set GOOGLE_APPLICATION_CREDENTIALS=/PATH/TO/YOUR/server/env/esp32vision-424610-4f4e66fe45e6.json
  
  For Unix/MacOS:
  export GOOGLE_APPLICATION_CREDENTIALS=/PATH/TO/YOUR/server/env/esp32vision-424610-4f4e66fe45e6.json

🗂️ Create resources folder in server/
Add an image named test.jpeg for object

🎬 Run the test.js file
$node test.js

✅ You should see the labels detected for the test image!

