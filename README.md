# onsiteiq-take-home

To run the project, first run `npm install`.

Then, you can run `npm run start` to start the local dev server.

The webapp is divided into two sections: "New Review" and "Saved Reviews". To start a new review, click the "Start New Candidate Review" button in the "New Review" section. This will pull a random user from the API, display their information, allow you to add notes, and either approve or reject the candidate. 

Upon completing the review, the completed review will show up in the "Saved Reviews" section, with some stylistic updates to reflect whether the candidate was approved or rejected. You can edit previous reviews in the "Saved Reviews" section by clicking "Edit Review" at the bottom of any of your completed reviews. This allows the user to effectively undo a review and save it for completion later, or to change their notes/approval status on completed reviews.

The webapp is responsive down to around a width of 350px. If responsive styles for smaller screen widths than 350px are required, please let me know.

Please note: the number that displays in the navbar ("You have X candidates to review") is hardcoded, and is just there for visual purposes. 

I have included unit tests for each component, util function, and service function. In a real/production application, I would include storybook tests as well as integration tests, but those were beyond the scope of this project.

To run tests, run `npm run test`.
