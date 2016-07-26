# TODO / Work Log for mvp-app

# 2016-07-26: Tuesday.  Home
- [] Work to finish the refactor
	clean out the index.js and refactor the logging code
- [] Add and test the user auth modules
- [] setup servers
- [] SSL termination with Lets' encrypt certs


## 2016-07-24: Sunday.  Grand Rapids Airport
- [X] Setup package.json for npm run stuff
- [X] Setup ESLint
    + [X] Adjust git ignore for packages?
    + [X] Create .eslint ignore
- [] Run ESLINT
    [X]  on index.js
    [X]  on winlog
- [] Setup Logging
     - [X] Winston
     - [X] Morgan
     - [X] Fix create file assignment line

- [] move index into 'app' directory?

- [] Setup mocha & chai for tests

- [] config settings like ports and env varaibles?
    + see hackathon starter?

- [] see if there is a way to search for names/PII? 
     [] linter?
     [] test?



*Index.js*
See if we can move this into something else / split it into a few different modules?


Setup / Update Sublime Text
    - [] Syntax highlighting for json files?
    - [] Have sublime-linter use the settings from the local directory

## FIX NPM so you dont need sudo

## 2016-05-26: Thursday
Wanted to add some of the time-sheet thoughts that I've been thinking.

However it's not really working out that way, as I've had to make minor adjustments to the code, and to document how to get the damn thing to work in the first place.

In case you're wondering, that's 

    node index.js

I also was probably in the process of adding Winston logging to the application.  I disabled it for now.



## Inline edit/update
 - [X] Add _id to the div?
 - [X] migrate js controller functions to standalone file
 - [X] on-blur run js function?
 
 COB Saturday:
 updateOnBlur is completed.  I have it setup so that it sends the id of the current object.

 instead of sending back the note.id, jsut send the whole note back instead
 now you have all the specific data you need!

 - actually we dont have all the data we need, the specific info inst updated
    add in an ng-model?

http://www.codelord.net/2014/05/10/understanding-angulars-magic-dont-bind-to-primitives/

<div ng-controller="bookCtrl">
    <div ng-repeat="tag in book.tags track by $index">
        <input type="text" ng-model="book.tags[$index]">
    </div>
</div>

 Still todo is to see how we can get the current values of the various fields
 then do a http.put to update the database with the current values?
 you can get the current info from the $scope var and then do the push

 on the backend then make the database id + save?

- [] implement the new tag array system

- [] is there a better way to translate label colors instead of storing
    bootstrap components in the database?

- [done] file directory cleanup


# 2016-02-28
The data seems to be a one-way binding, it doesn't update automatically
to include what we're looking for in the model

So can we create the index by something from the email i sent to RML

and then assign an ng-model=?

so we've got the $index assigned to the func param of the ng-repeat
now see if we can attach the ng-model to the app?
