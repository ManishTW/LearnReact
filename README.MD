In order to run this basic example, follow the steps below - 
sudo npm install -g httpster
This helps to run a server from any location on my computer.
Now go into the folder in terminal and type - 
httpster
Optionally you can provide port (and also directory information)
httpster -d ./learn-react -p 3000
The -d is for directory and -p is port
Verify the app by going to http://localhost:3000


---

Steps for Babel static transpiling - 
npm init
npm install babel-cli@6.18.0 --save-dev
sudo npm install -g babel-cli
npm install babel-preset-react@6.16.0 --save-dev
lynda-react manisht$ n
pm install babel-preset-latest@6.16.0 --save-dev
npm install babel-preset-stage-0@6.16.0 --save-dev

babel ./src/index.js --out-file ./dist/bundle.js

