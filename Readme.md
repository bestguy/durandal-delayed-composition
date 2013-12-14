# Durandal Delayed Composition

I needed a solution for quickly loading a (mostly) server-side rendered landing page,
but also wanted some  [Knockout](http://knockoutjs.com) functionality on the page, and also to use [Durandal](http://durandaljs.com) for SPA functionality for logged in users, etc.

Prior to this, I was using Durandal to render everything SPA-style.
It worked well, but in my case it added a few precious seconds to rendering the landing page content
due to requirejs, composition, ajax calls, data-binding, etc.

My constraints were:

- I did not want to trigger another page reload or request to the server to start the SPA functionality.
- I wanted to replace the server-side content once the SPA started, and without resorting to jQuery hacks, etc.

This approach uses basically the same code as I had before, but importantly delays the Durandal `app.start()` call until the user takes some action that needs it.
This example triggers it when a user clicks a button.

I think this example clearly shows the benefits of Durandal's use of requirejs and Knockout, and a testament to it's overall design.  Great framework!

## Technologies Used:

### Client-Side

- **Knockout.js** - [http://knockoutjs.com](http://knockoutjs.com)
	- Used for data-binding between JavaScript models and the DOM
- **Durandal** - [http://durandaljs.com](http://durandaljs.com)
	- Application library built on Knockout and requirejs that adds advanced modules and view transition functionality.
- **requirejs** - [http://requirejs.org](http://requirejs.org)
	- Client-side loader for JavaScript modules.
- **Bootstrap 3** - [http://getbootstrap.com/css/](http://getbootstrap.com/css/)
	- CSS framework for responsive layout and grids.
- **Font Awesome** - [http://fontawesome.io/3.2.1/](http://fontawesome.io/3.2.1/)
	-  CSS framework for responsive layout and grids.

### Server-Side

- **node.js** - [http://nodejs.org/](http://nodejs.org/)
	- Server-side Javascript engine.
- **express 3** - [http://expressjs.com/](http://expressjs.com/)
	- Web application framework for node.js
- **jade** - [http://jade-lang.com/](http://jade-lang.com/)
	- node.js templating engine and HTML shorthand
