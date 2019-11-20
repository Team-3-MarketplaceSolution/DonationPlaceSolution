# DonationPlaceSolution
#Mobile Application 
#React Native App
Apple + Android

#Dependencies: 
Node
expo

How to get the application running: 

#1) Open terminal to the directory you would like to copy the git repository to.

#2) Enter the following command: 

    git clone https://github.com/Team-3-MarketplaceSolution/DonationPlaceSolution

#3) Once the repository is created, navigate to it: 

    cd .\DonationPlaceSolution\




#4)install npm with the following command:

    npm install




#5) navigate to:

    \node_modules\metro-config\src\defaults\blacklist.js




#6) edit blacklist.js > 

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
