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
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Navn',
      name: 'name',
      type: 'string',
      options: {
        list: ['Jonas Markus', 'Samuel', 'Victor', 'Kristian'],
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
      type: 'text',
    },
    {
      name: 'loggslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace('æ', 'ae')
            .replace('å', 'aa')
            .replace('ø', 'o')
            .slice(0, 200),
      },
    },
  ],
}
