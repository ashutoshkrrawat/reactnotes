
//? 📌 What is React Router?
// React Router is a library used in React apps to navigate between pages without reloading the page.

// It helps in creating single-page applications (SPAs) with multiple views.

//? how does the nav work
// navlink and link what they do is that they modify the url thats their sole job, <NavLink to="/about">about</NavLink> this stament means that 
// when we click on home the url will modify itself and add "/about" at end of it.
// Their job is to modify the URL without reloading the page.

//? what happens after url change?
// in the main.jsx file we have specified "<Route path='/about' element={<About/>}/>" this statement mean that when the url is changed to /about 
// then render the <About/> component
// inside the <Outlet /> (if using nested routes inside a Layout).

// the code written in the main.jsx is the syntax of react router, learn it
