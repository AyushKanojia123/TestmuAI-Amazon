# TestMu AI Automation Assignment

## 📌 Overview
This project automates product search and basic cart functionality on Amazon using Playwright.

Two test cases are implemented:
- Search for an iPhone and extract its price
- Search for a Samsung Galaxy device and extract its price

Both tests run in parallel and handle real-world scenarios like dynamic UI changes and missing elements.

---

## 🛠️ Tech Stack
- Playwright (JavaScript)
- Node.js

---

## ⚙️ Features
- 🔍 Automated product search on Amazon
- 🪟 Handles new tab navigation
- 💰 Extracts product price dynamically
- 🛒 Attempts to add product to cart
- ⚡ Parallel test execution
- 🛡️ Robust error handling for:
  - Missing price
  - Variant selection pages
  - Dynamic UI changes
- 🎥 Screenshot and video capture on failure

---

## 📁 Project Structure

testmu-amazon-automation/
│
├── tests/
│ └── amazon.spec.js # Test cases
│
├── pages/
│ └── amazonPage.js # Page Object Model (POM)
│
├── playwright.config.js # Playwright configuration
├── package.json
└── README.md

---

## 🚀 Setup Instructions

1. Clone the repository

git clone https://github.com/AyushKanojia123/TestmuAI-Amazon.git

2. Navigate to project folder

cd TestmuAI-Amazon


3. Install dependencies

npm install


4. Install Playwright browsers

npx playwright install


---

## ▶️ Run Tests
npm test


---

## 📊 Sample Output

Running 2 tests using 2 workers

iPhone Price: Not Found
Galaxy Price: 39,999

✓ Test Case 1: iPhone
✓ Test Case 2: Galaxy

2 passed

---

## ⚠️ Notes / Limitations
- Amazon’s UI is dynamic, so:
  - Price may not always be visible
  - Some products require variant selection before adding to cart
- These scenarios are handled gracefully to avoid test failures

---

## 🧠 Key Learnings
- Handling dynamic web elements
- Managing multi-tab navigation in Playwright
- Writing stable automation scripts
- Implementing parallel execution
- Using Page Object Model for clean code structure

---

## 👨‍💻 Author
Ayush Kanojia
