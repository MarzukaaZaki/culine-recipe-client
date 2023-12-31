# Culine Chef Recipe Hunter Site
This is a website that allows you to check out different chefs and some of their popular recipes.
Link: [Culine Chef Recipe Hunter](https://culine-food-recipe.web.app/)
# Main Features
- Homepage
- User Registration and Authentication
- Chef Recipe Details
- Blog

# Main Functionalities

## Server Integration
The data displayed in the client side is loaded from a server. The server is created and managed using ExpressJS. 

## User Registration and Authentication
The user can register into and log in and out from the site. 


### User Registration
- A user can create an account with his/her name, email, a password, photo url. All of these fields are required to create an account for Culine.
- Password must follow constraints, otherwise account is not created and an error occurs.

### Authentication
- Only the registered user can sign-in.
- An error occurs if the user's credentials don't match.

## Chef Details
- This functionality is availed by clicking on the view recipe button on the chef cards on homepage.
- This takes user to a page containing chef details.

## Favouriting a Recipe
- This can be done on the chef details page
- On clicking the favourite button on a recipe, a toast message is shown.

# Resources and Packages used
- [React Router](https://reactrouter.com/en)
- [Firebase](https://firebase.google.com)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/)
- [ExpressJS](https://expressjs.com/)
- [React Hot Toast](https://react-hot-toast.com/)

