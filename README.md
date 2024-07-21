ECOMCROW

## Overview

MULTI VENDOR ECOMMERCE API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [MongoDB Connection](#mongodb-connection)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

Instructions on how to set up the project locally.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/demamano/EcomCrow.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd project-name
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

Basic usage instructions.

```bash
npm start
```

## Configuration

Configuration details for the project.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/database_name
```

## MongoDB Connection

Details on how to set up the MongoDB connection.

### Using Mongoose

This project uses [Mongoose](https://mongoosejs.com/) to interact with MongoDB. The connection setup can be found in `src/database.js`:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### Initializing the Connection

Ensure the connection is established when the server starts. Modify `src/server.js`:

```javascript
const express = require('express');
const connectDB = require('./database');

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Scripts

Scripts provided in `package.json` to help with development and deployment.

- **Start the application:**
    ```bash
    npm start
    ```

- **Run tests:**
    ```bash
    npm test
    ```

## Contributing

Guidelines for contributing to the project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

Specify the project's license.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
