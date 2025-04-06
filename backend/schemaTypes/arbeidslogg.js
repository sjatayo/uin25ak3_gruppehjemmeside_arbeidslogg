export const logg = {
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    {
      title: 'date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calenderTodayLabel: 'Today',
      },
    },
    {
      title: 'Navn',
      name: 'name',
      type: 'string',
      options: {
        list: ['Jonas Markus', 'Samuel Atayo', 'Victor Tønneberg', 'Kristian Larsen'],
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Tid Brukt',
      name: 'tidBrukt',
      type: 'string',
      options: {
        list: [
          '1 time',
          '2 timer',
          '3 timer',
          '4 timer',
          '5 timer',
          '6 timer',
          '7 timer',
          '8 timer',
          '9 timer',
        ],
      },
    },
  ],
}
