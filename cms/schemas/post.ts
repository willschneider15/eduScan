import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required().min(2).error('A title of min. 2 character(s) is required'),
        Rule.max(50).error('Shorter titles are usually better')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name:'host',
      title:'Hosted By',
      type:'string',
      validation: Rule => [
        Rule.required().min(2).error('A host name of minimum 2 character(s) is required')
      ]
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'datetime',
    }),
    defineField({
      name:'location',
      title:'Location',
      type:'string',
      validation: Rule => [
        Rule.required().min(2).error('A location of minimum 2 character(s) is required')
      ]
    }),
    defineField({
      name:'link',
      title:'Link',
      type:'url',
      validation: Rule => Rule.uri({
        scheme: ['https'],
        allowRelative: false
      }).required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required().error('Please select an author'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required().min(1).error('At least one category must be selected.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
