# Overview
This project is composed of two layers: the front layer & back layer.  
The front layer contains two screens: 
- The **home page** that displays the list of books  offering the possibilty to delete books.
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/front/home_page.png" />

- The **add book page** with a form that contains all these **requited** fields :name/author/genres with a value that **either 'Horror',
    'Adventure',
    'Fantasy',
    'Detective',
    'Historical',
    'Science Fiction' or
    'Romance'**/number of pages that is **>=2**.  
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/front/add_page.png" />

The back layer has 4 requests:
-  Get all books.
-  Find a book.
- Delete a book.
- Create a new book.

# Purpose of the project

This project was made in order to perform testing on it. The different types of testing performed are:

- Unit testing
- Integration testing
- End-to-end testing
- Acceptance testing



## Unit testing
Unit tests were written using Jasmine test framework to test the front layer of the application.The unit tests are contained in the file .spec.ts of every component or service and they were limited to test :
- If an element exists in the UI.
- If service was created properly.
- If the form is filled properly (respects the constraints that were listed above).

Execute this command in order to perform unit tests:

```bash
cd angular-book-boutique-testing
ng test
```

## Integration testing

Two types of integration tests were performed :
- Testing  the interaction between component and service in angular by applying a mock service inside the component instead of the actual service and test the possible interaction between the actual component and the mock service.An example of this was performed inside the home component to test if the mock delete works properly with the component.  To perform this test, just type these commands:
```bash
cd angular-book-boutique-testing
ng test
```
- Testing the interaction between the backend and the database: We created a mock database and tested if requets of create book, delete book and get one book work properly with the mock database. To perform this test just type:
```bash
cd nest-book-boutique-testing
npm test
```
## End to end testing
The test was performed using cypress on the front layer to test:
- If an element exists on the UI.
- If creating multiple books with their data contained in the examples.json file  is possible.

To perform the end to end tests, just type these commands:
```bash
cd angular-book-boutique-testing
node_modules/.bin/cypress run OR node_modules/.bin/cypress open
```
Check the demo inside **[videos](angular-book-boutique-testing/cypress/videos)** folder
## Acceptance testing
This test is included in  **[here](acceptance-test)**

# Results of testing
## Unit testing
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/tests/Unit%26Integration_tests.png" />

## Integration testing
- Service & component:
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/tests/Unit%26Integration_tests.png" />

- Backend & DB:
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/tests/integration.png" />

## End to end testing
<img src="https://github.com/MayssaJaz/book-boutique-testing/blob/main/photos/tests/endtoend.png" />





