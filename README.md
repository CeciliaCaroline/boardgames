

# React Application with AntDesign and Tailwind CSS

## Overview

This project is a React application built using the AntDesign component framework and Tailwind CSS for styling. The application replicates the layout and functionalities based on the provided Figma design, focusing on displaying data in a table format with editing, sorting, and filtering capabilities.

## Features

- **Navbar**: A placeholder for the navbar (currently empty).
- **Sidebar**: Included in the layout for navigation.
- **Main Content Area**: Contains a tab component with one implemented tab displaying data.
- **Data Table**: Utilizes the AntDesign Table component to present data.
- **Mock API Service**: Simulates server interaction to fetch JSON data.
- **Edit Functionality**: Allows editing of table rows with changes logged to the console.
- **Sorting and Filtering**: Built-in sorting and filtering capabilities for table columns.
- **Testing**: I had some trouble getting Jest to work with the Ant Design components so I did not write any tests

### Data Sorting
While sorting data in the bbg_rating column, it was observed that some ratings were missing and represented by a '-' value. This caused issues with the table's sorting functionality, as the '-' values disrupted the expected numerical order.

To address this, a custom data transformation was implemented. Any missing bbg_rating values represented by '-' are now replaced with 0, ensuring proper sorting and avoiding NaN errors during comparison. This allows the table to sort all entries consistently, even when some ratings are unavailable. See the implementation in this pull request[https://github.com/CeciliaCaroline/boardgames/pull/1]

## Technical Requirements

- **React**: The application is built using React.
- **AntDesign**: UI components are created using the AntDesign framework.
- **React Context API**: Used for state management to provide data across components.
- **Tailwind CSS**: Used for styling and layout purposes.


## Setup Instructions

To run the application locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   Use the following command to start the application:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Additional Notes

- The edit feature for table rows allows for modifications, and the updated state is logged in the console.
- Sorting and filtering functionalities are implemented according to AntDesign's capabilities.


