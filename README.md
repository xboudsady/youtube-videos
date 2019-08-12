# Pics

## Demo Site → [YouTube Videos](#)

React App, that utilizes the YouTube API. Takes user requests, and renders component onscreen. This app will utilize 5 component buildout.
* `<App />` handles user input.
  * Contains the method to fetch data
  * Will hold state properties of array of data being fetched.
  * The selected video, to be played when clicked from the `<ItemList />` component.
* `<SearchBar />` Form field for user input.
* `<VideoList />` holds child component of videos being fteched.
* `<ItemList />` Child component of `<VideoList />` which renders the videos being searched.
* `<VideoDetail />` Component to play render and selected video, and description details of it


## App Challenges
* Need to get a search term from the user
* Need to use that search term to make a request to an outside API and fetch data
* Need to take the fetched YouTube and show them on the screen in a list
* Pass in a prop down to 2nd child component
* Child component update state change to parent component

## Stuff to Figure Out
* How do we get feedback from the user?
* How do we fetch data from some outside API or server?
* How do we show lists of records?
* How to communicated deep nested props to parent to child - vice versa

## Technology
* JS Framework - [React](https://reactjs.org/)
* CSS Framework - [Semantic UI](https://semantic-ui.com/)
* Videos - [YouTube API](https://unsplash.com/developers)
* AJAX Client - [Axios](https://github.com/axios/axios)
* Hosted - [Amazon Web Services](https://https://aws.amazon.com/)

## App Screen Shot

![App Screenshot](#)