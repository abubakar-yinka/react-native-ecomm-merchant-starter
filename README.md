Here’s a comprehensive README file for the project, encapsulating the task requirements and providing all necessary sections, including a demo video placeholder. The structure ensures clarity and aligns with industry standards.

Bridge Merchant Recruitment Test

Overview

This project is a mobile app product search catalog designed as part of the Bridge Merchant recruitment process. It aggregates products into categories, allowing users to search, view results, and manage search history. The app demonstrates skills in React Native, TypeScript, API integration, and clean code practices.

Features

	•	Fetch and display products and categories from FakeStoreAPI.
	•	Map API categories to UI-specific categories.
	•	Persist user search history locally.
	•	Dynamically filter and display search results for products and categories.
	•	Optimized user interface with React Native.
	•	Integration of animations and transitions (optional).

Technologies Used

	•	React Native
	•	TypeScript
	•	React Query (TanStack Query) for data fetching and caching.
	•	Axios for API integration.
	•	Zustand for state management.
	•	MMKV for local storage.

Installation and Setup

	1.	Clone the repository:

git clone https://github.com/<your-username>/bridge-merchant-app.git
cd bridge-merchant-app


	2.	Install dependencies:

npm install


	3.	Run the project:

npx react-native run-android # For Android
npx react-native run-ios     # For iOS

API Integration

The app uses the FakeStoreAPI for fetching products and categories. The categories provided by the API are mapped to the following UI-specific categories:

API Category |	UI Category
electronics |	Fresh Food & Vegetables
jewelery |	Dairy & Eggs
men's clothing |	Bakery
women's clothing |	Meat

Features Implementation

1. Display Categories and Products

On loading the app:
	•	Fetch all categories and products from the API.
	•	Display categories with their associated design (per Figma).

2. Search Functionality

	•	Users can search for products and categories by keywords.
	•	Search results display both products and categories matching the query.

3. Persistent Search History

	•	Store user search history locally using MMKV.
	•	Limit history to the last 10 searches.

4. User Interface

	•	Designed per the Figma guidelines.
	•	Added personal enhancements for improved UX.

How to Use

	1.	Launch the app.
	2.	View the categories and products on the home screen.
	3.	Use the search bar to find specific items.
	4.	Navigate between tabs for additional functionality (optional demo of blank pages).

Demo Video

Development Details

Code Structure

	•	src Directory:
	•	api/: API-related configurations and hooks.
	•	components/: Reusable UI components (e.g., cards, buttons).
	•	screens/: Screen-specific logic and layouts.
	•	store/: Zustand state management setup.
	•	utils/: Helper functions and storage utilities.

Core Packages

	•	React Query: Handles API calls and caching.
	•	Axios: Manages HTTP requests.
	•	Zustand: Simplifies global state management.
	•	MMKV: Ensures fast and persistent local storage.

Release Files

Download the release files:
	•	APK
	•	IPA

Testing

	•	Tested on both Android and iOS emulators.
	•	Verified API integration and local storage functionality.
	•	Ensured UI consistency with Figma designs.

Submission

Code is hosted on GitHub at: GitHub Repository.
Release files are available on the repository under GitHub releases.

Contact

For further questions or clarifications, contact:
	•	Email: maryammudasiru@gmail.com
