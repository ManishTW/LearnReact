In order to run this basic example, follow the steps below - <br/>
sudo npm install -g httpster <br/>
This helps to run a server from any location on my computer. <br/>
Now go into the folder in terminal and type - <br/>
httpster<br/>
Optionally you can provide port (and also directory information)<br/>
httpster -d ./learn-react -p 3000<br/>
The -d is for directory and -p is port<br/>
Verify the app by going to http://localhost:3000<br/>

---

Steps for Babel static transpiling - <br/>
npm init <br/>
npm install babel-cli@6.18.0 --save-dev <br/>
sudo npm install -g babel-cli <br/>
npm install babel-preset-react@6.16.0 --save-dev <br/>
npm install babel-preset-latest@6.16.0 --save-dev <br/>
npm install babel-preset-stage-0@6.16.0 --save-dev <br/>
<br/>
babel ./src/index.js --out-file ./dist/bundle.js <br/>


---

Steps to move from using babel transpiler directly to webpack module bundler - <br/>
<br/>
1. Add webpack.config.js file - the Dev server in webpack allows for hot reloading unlike httpster. <br/>
2. Remove the generated bundle.js from inside dist (I am not removing the file here for learning purpose. But this file will not be used, as the new generated bunldle.js file will be inside assets folder in dist and this will be referred from index.html) <br/>
3. npm install webpack@1.13.3 --save-dev <br/>
4. npm install babel-loader@6.2.5 --save-dev <br/>
5. npm install webpack-dev-server@1.16.2 --save-dev <br/>
6. sudo npm install -g webpack@1.13.3 <br/>
webpack
OR (without install globally and using webpack use it from node_modules folder)<br/>
./node_modules/.bin/webpack <br/>
7. Now the bundle.js file is created inside dist/assets folder. <br/>
8. npm start





