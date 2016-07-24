# TODO

2016-07-24: Sunday.  Grand Rapids Airport
- [X] Setup ESLint
    + [X] Adjust git ignore for packages?
    + [X] Create .eslint ignore
- [] Run ESLINT
    [X]  on index.js
    [X]  on winlog
- [] Setup WinLogging correctly

- [] Setup package.json for npm run stuff
- [] Syntax highlighting for json files?
- [] move index into 'app' directory?
- [] Setup mocha & chai for tests

2016-05-26: Thursday
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

- []  




# Completed
- [done] file directory cleanup


2016-02-28
The data seems to be a one-way bindnig, it doesnt update automagically
to include what we're looking for in the model

So can we crete the index by something from the email i sent to RML

and then assign an ng-model=?

so we've got the $index assigned to the func param of the ng-repeat
now see if we can attach the ng-model to the app?