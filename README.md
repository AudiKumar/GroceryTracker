# Grocery Tracker
My family buys a lot of groceries and we forget what we have. Therefore I thought it would be a good idea to create a system to track what frozen foods are being used in order to cut down on waste. 

## How this will work 
- Expo will be used to create the application. 
    - The application itself will be a barcode scanner that sends the groceries scaned to a database, while on another screen the contents of the database will be displayed
- The database used will be DynamoDB on AWS (cause it's free!)
- I will be using amplify to make the server stuff easier

## Checklist
- [ ] Frontend 
    - [x] Determine What Screens are Needed
    - [ ] Barcode Stuff 
        - [ ] Setup Camera and Barcode Stuff within expo 
        - [ ] code a working barcode scanner 
        - [ ] figure out how to get the information needed for the bar code

- [ ] Backend
    - [ ] AWS Amplify 
        - [x] setup aws amplify on the project
        - [x] get auth working
        - [ ] get lamba working
        - [ ] read more about what is needed and update this list accordingly


