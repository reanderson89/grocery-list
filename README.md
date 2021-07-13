# Local Storage Activity
Please use the following websites for resources on using local storage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://blog.logrocket.com/localstorage-javascript-complete-guide/

- DO NOT TOUCH THE HTML!!! EVERYTHING WILL BE DONE IN JAVASCRIPT!!!

- For this activity you are going to build a website that is able to add items to a grocery list using the given input field and then have them shown on the screen. We want the grocery list to persist so we are going to have to use "localStorage" to save the grocery items to our local storage and then be able to update and delete them as well.

# localStorage methods:

- localStorage.setItem("key", "value") > this will be used to add items to the localStorage. The "key" is how we will get the value later on and the value is the item we are saving. (think key: value pair just like an object)

- localStorage.getItem("key") > we need to pass in the key in order to get the value that is stored on it back from localStorage.

- localStorage.removeItem("key") > this will delete an item based on the "key" given.

- localStorage.clear() > deletes all localStorage

- localStorage.key(index) > localStorage has an index starting from 0 and continuing just like our arrays. We can access localStorage keys by passing through an index number.

- localStorage.length - will give us the total items in localStorage. Remember we can subtract 1 from length and that will give us the last index of localStorage.


