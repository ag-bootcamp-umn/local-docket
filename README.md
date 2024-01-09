# Daily Docket

## Description

This project consits of a simple daily schedule planner that can persist user input in the browser's local storage. It usese Javascript and jQuery to accomplish that, as well as to format the dom elements to correspond to the time blocks relative to the moment at which the user accesses the app. 

Uses of JavaScript in this project include:

- Utilizing a third-party API to get the current time and date.
- Using the API methods to format said data.
- Manipulating the DOM, including HTML elements, as well as their 'class' and 'id' attributes.
- Using the API data to colour dom elements in past, present and future.
- Handling click events on multiple targets.
- Capturing user input and persisting it in local storage.
- Updating local storage with each save.

## Installation

It is suffictient to download the files in the repository, or clone the repository and open index.js in a local browser.

## Usage

Users can see the current date and the top of the page, and several time slots from 9AM to 5PM. The time slots are colour-coded to denote past, present and future times.
Users can click into any time slot and enter text. By clicking the button (with the floppy disk icon) to the right of each slot, the user can save the data in that slot within the browser's local storage. Upon accessing the app later, the user with find that their saved data has populated the slots in which they were saved.

## Links

Github Repository: [https://github.com/ag-bootcamp-umn/local-docket](https://github.com/ag-bootcamp-umn/local-docket)

Deployed App: [https://ag-bootcamp-umn.github.io/local-docket/](https://ag-bootcamp-umn.github.io/local-docket/)

## Credits

All work is my own. Many thanks to the JavaScript teachers I have learned from on Coursera, Udemy, and the UMN Coding Bootcamp.

## License

MIT License

Copyright (c) 2024 Alex Geer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
