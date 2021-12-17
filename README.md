# SHOP-ELECTRO

## Overview ##
For this project, I will be creating an app that allows users to purchase electronic items. The user will create an account, login to the account and view the variety of items they would like to purchase. They will be able to add/remove items to their cart. Users will also be able to rate items and leave comments to certain products.

## Wireframes ##

## ERD ##


## User Stories ##
1. When user opens the app, they will be able to create or login to an account.

2. Once logged in, the user can see a list of electronic items to browse or purchase.

3. When a certain item is clicked, the user is directed to the item's ratings and price.

4. The user has the option to add items to cart.

5. The user can see the list of items in cart and have the option to remove or proceed to checkout.

6. When proceeding to checkout, the user must submit their payment info and shipping address.

## Routes ##
- app.post ('/users') create user/account
- app.post ('/users/login') login user
- app.get ('/items') view all items
- app.get ('/items/:id') view specific item details
- app.post ('/cart') add item to cart
- app.get ('/cart') view item in cart
- app.delete ('/cart') remove item from cart
- app.get ('users/order/:id') view a single order
- app.get ('/users/order') view all orders

## MVP Checklist ##
- User can create/login to an account
- The user will be able to add items to their cart
- The user will  be able to checkout items after submiting info
- User will have ability to remove items
- Orders will visible to the user
- User is able to logout

## Stretch Goals ##
- Implement ratings for each item
