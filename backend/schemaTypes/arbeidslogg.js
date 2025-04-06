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
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug Logg',
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
