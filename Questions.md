# Questions

# Navigation
Can I just make my Navigation bar a component at a higher level to show on all pages that exist as lower level components?

# Routing
Currently, creating all routes on one layer at the highest level. How can I subroute my help routes so
I don't spam components and routes in one file

I want to be able to only route to /help when the user clicks on the help from the navigation bar

From there, I should be able to just route to /exchangetransactions when I click on the card from within the help page
and route to /help/exchangetransactions. I should only have to import the exchangetransactions help page in /help and
not at the highest approuter page. Is this called nested routes?

