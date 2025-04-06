export const logg = {
  name: 'logg',
  title: 'logg',
  type: 'document',
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Person',
      name: 'personId',
      type: 'string',
      options: {
        list: [
          {title: 'Jonas Markus', value: 'Jonas Markus'},
          {title: 'Kristian', value: 'Kristian'},
          {title: 'Samuel', value: 'Samuel'},
          {title: 'Victor', value: 'Victor'},
        ],
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Tid brukt',
      name: 'tidbrukt',
      type: 'string',
      options: {
        list: [
          {title: '1 time', value: '1 time'},
          {title: '2 timer', value: '2 timer'},
          {title: '3 timer', value: '3 timer'},
          {title: '4 timer', value: '4 timer'},
        ],
      },
    },
  ],
}
