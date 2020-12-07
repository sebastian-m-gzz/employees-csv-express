# employees-csv-express

### Description
Converts a csv file to a json using exprsess node.js.
Returns its data throught the endpoints.

### How to use:
1. Clone this repo
2. Run the app with the following command from the proyect directory:
    - ``` node src/app.js ```
3. Try the app endpoints.

### Endpoints:
- **Employees**
    - ``` http://localhost:3000/employee/42/ ```  
    - ``` http://localhost:3000/employee/1/first_name ```   
    - Returns the whole an all the data from an entry with the given id.
    - If the column parameter is provided, it returns that column, else it returns all columns.