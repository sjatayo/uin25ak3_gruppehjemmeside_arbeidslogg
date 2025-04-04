export const profil = {
  name: 'profile',
  title: 'Profil',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    },
    {
      name: 'interest1',
      title: 'Interesse 1',
      type: 'text',
    },
    {
      name: 'interest2',
      title: 'Interesse 2',
      type: 'text',
    },
    {
      name: 'interest3',
      title: 'Interesse 3',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug profil',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
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
