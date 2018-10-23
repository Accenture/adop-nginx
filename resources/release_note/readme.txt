####################
## description of the folder structure

bp 
-> Contains the blueprints files, that are actually snippet of HTML code. 
--> NOTE.  If you add some JavaScript code, you need to add the attribute type="text/javascript-lazy"  to the script tag. See the demo-release-note.html example.

css
-> contains the CSS of the page

dir
-> contains the directives of the Angularjs app.

img
-> contains the images for the page

js
-> animations.jquery.js: feature the animation of the header and the responsive resizing of it
-> appRN.js: it is the AngularJs app that manages the dynamic loading and the Consul status check of the services
-> npm.js: it was there

scss
-> sass files used to make the style

main folder
-> index.html main HTML file
-> plugins.json file descriptor for dynamic loading

#######################
## description of the file descriptor plugin.json

{
    "core" : [  ## core is where we place the links/tools (components)
        {
            "type": "tool links",  ## groups of components can be made and given type (like "tool links", "admin links", "jenkins links", etc.)
            "components" : [ ### array of components
                {
                    "id": "jenkins",                ## this is the HTML id 
                    "title": "jenkins",               ## this is the title that is eventually used if the image is missing
                    "img": "img/jenkins.png",            ## this is the relative (or absolute) path to the logo image
                    "description": "jenkins main dashboard",  ## this is a few words description that will go under the title/logo
                    "link": "/jenkins"                    ## this is the link (relative of absolute path) to the service         
                }, 
                {
                    "id": "selenium",
                    "title": "selenium",
                    "img": "img/selenium.png",
                    "description": "web application automated tester",
                    "link": "",
                    "linkCreate": {                   ##  if this object is present, then the link is created dynamically
                        "host": "selenium",             ## this is what is used as host parameter in createUrl
                        "endPath": "//grid/console"     ## this is the final part of the path that some services have
                    }
                }
            ]
        }
    ],
    "blueprints": [     ## blueprints is an array of objects that indicate the file to be loaded dynamically
        {"url": "bp/aowp-release-note.html"}   ## url indicate the relative path of the file to be included; the files should be saved in bp folder
    ]
}




