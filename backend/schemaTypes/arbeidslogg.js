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
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Tid Brukt',
      name: 'tidBrukt',
      type: 'number',
    },
  ],
}
