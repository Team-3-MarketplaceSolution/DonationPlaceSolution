# DonationPlaceSolution
#Mobile Application 
#React Native App
Apple + Android

#Dependencies: 
Node
expo

To run application: 
type expo start in terminal once you are in the project's directory.
*NOTE* 
Please use VSCode, it is the most steamlined way to geth this software up and running.

How to get the application running: 

1) Open terminal to the directory you would like to copy the git repository to.

2) Enter the following command: 

    git clone https://github.com/Team-3-MarketplaceSolution/DonationPlaceSolution

3) Once the repository is created, navigate to it: 

    cd .\DonationPlaceSolution\




4)install npm with the following command:

    npm install




5) navigate to:

    \node_modules\metro-config\src\defaults\blacklist.js


(IF ON WINDOWS):

6) edit blacklist.js > (OPTIONAL ON WINDOWS)

    CHANGE

    var sharedBlacklist = [
    /node_modules[/\\]react[/\\]dist[/\\].*/,
    /website\/node_modules\/.*/,
    /heapCapture\/bundle\.js/,
    /.*\/__tests__\/.*/
    ];

    TO 

    var sharedBlacklist = [
    /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
    /website\/node_modules\/.*/,
    /heapCapture\/bundle\.js/,
    /.*\/__tests__\/.*/
    ];

7) NPM install native-base


8) Install formbuilder

react-native-form-builder requires a peer of native-base

To Install the peer dependecy

$ npm i native-base --save

link the peer dependecy using

react-native link
and then insteall react-native-form-builder

$ npm i react-native-form-builder --save


