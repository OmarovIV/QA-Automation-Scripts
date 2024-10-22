# QA Automation Scripts

## Project Overview

This repository contains automated test scripts built using Playwright. The tests cover various scenarios for different websites, demonstrating login flows, product selection, and form interactions. These scripts are designed to be robust, reusable, and easy to maintain, aiming to simplify the testing process for web applications.

## Technologies Used

- Playwright: For browser automation and testing.

- TypeScript: Ensures type safety and maintainable code.

- Node.js: Provides the environment to run the scripts.

## Status Badges

![Build Status](https://github.com/OmarovIV/QA-Automation-Scripts/actions/workflows/playwright.yml/badge.svg)
![Languages](https://img.shields.io/github/languages/count/OmarovIV/QA-Automation-Scripts)

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Status Badges](#status-badges)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Setup Instructions

1. Clone the repository:

git clone https://github.com/OmarovIV/QA-Automation-Scripts.git

2. Navigate to the project directory:

cd QA-Automation-Scripts

3. Install dependencies:

npm install

4. Install Playwright browsers:

npx playwright install --with-deps

## Usage

1. Running Tests: Use the following command to run the Playwright tests:

npx playwright test

2. Viewing Test Reports: After the tests have run, a report will be generated. Open it using:

npx playwright show-report

## Testing

These scripts are organized into various test suites. You can run individual test files or specific test cases. Here are some commands for common tasks:

- Run tests in a specific file:

npx playwright test tests/form-example.spec.ts

- Run tests in headful mode:

npx playwright test --headed

- Run tests with tracing enabled:

npx playwright test --trace on

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions, feel free to reach out:

- LinkedIn: [Igor Omarov](https://www.linkedin.com/in/igor-omarov/)
- Email: [xyarriddi@gmail.com](mailto:xyarriddi@gmail.com)
