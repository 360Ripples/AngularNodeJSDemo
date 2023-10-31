1.This server folder was created to test angular application in node js server deployment. 
This was a poc done for docker. As we are planning to test the docker image setup for node JS and angular .

The app.js inside the server folder will start the express HTML server and will parse the files in dist folder, index.html can be viewed when accessing the url http://localhost:3000/index.html

command to start the node js server "node app.js"


The angular folder is used for creating a angular project and the demo angular app built will be tested by copying the angular build files into the dist folder of nodejs.

Now from the angular project execute the command "ng build --configuration=production"

Copy all the files from dist folder of angular into the dist folder of the node JS server of bullet 1. 
IMPORTANT: copy only the files into the dist folder and not the folder.

Now run the node js server using "node app.js" and access the angular application using the url 
http://localhost:3000