// import { defineType, defineField } from 'sanity'

// export default defineType({
//   name: 'aboutPage',
//   title: 'About Page',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'array',
//       of: [{ type: 'block' }],
//     }),
//     defineField({
//       name: 'photo',
//       title: 'Photo',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     }),
//   ],
// })

import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});