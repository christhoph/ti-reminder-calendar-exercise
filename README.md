# TI Reminder Calendar exercise

## Indications

To run/start the application, use the following command:

```sh
npm run dev
```

To run the application linting, use the following command:

```sh
npm run lint
```

To build the application, use the following command:

```sh
npm run build
```

To run the tests, use the following command:

```sh
npm run test
```

## Tech Stack

- Node v20
- Vite
- React
- Tailwind CSS
- TypeScript
- Vitest
- React Testing Library

### NPM Dependencies

- date-fns
- react-hook-form
- @tanstack/react-query

## Considerations

- Considering the designs and examples of reminders, the 30-character limit for the `description` seemed too short, so I increased it to 70-character to make it more useful. I think that this 30-character limit could be more useful for the `title`.
- Having the calendar and a Date input in the form is confusing, so I synchronized both and used the date type input so that the user can better manage the date on which they want to create if it is different from the one selected in the calendar. This is also for the purpose of reducing the validation logic of the entered date format.
- I implemented additional features that would help to have a better UX:
  - When a user creates or updates a reminder, the date selected in the `Date` input if it is different from the one selected in the calendar is updated and the user is redirected to that day in the calendar to view their new reminder.
  - If you click on the dot between the arrows for the previous month and the next month, you will be redirected to the current day (today).
  - This is to help users come back if they created a reminder years later (although it's not very intuitive)
  - Synchronization between the Date input of the form and the day/date selected in the calendar. This makes it easy to select a day without having to type or select it in the device's DatePicker.

### Proposed improvements

If we have more time or incentive and we can help make the requirements clearer, I would suggest the following improvements:

- Have a mobile design or at least adapt the current design so that it can be used from a mobile device
- To simplify the logic between the Date input and the calendar, you could use the calendar to select the day to create the reminder.
  This could involve some improvements to the calendar such as:
  - Be able to select a custom month or year
  - Have a different structure like a `DatePicker` where the user can decide what date they require without having to advance month by month until they reach months or years ahead or back.
- A character counter could be added to the `description` textarea so that the user is aware of the current limit and can better plan their text.
  If possible, consider increasing the character limit.
- A confirmation dialog could be added when deleting a reminder.
- Better test the entire application and probably consider e2e testing in addition to unit testing.
