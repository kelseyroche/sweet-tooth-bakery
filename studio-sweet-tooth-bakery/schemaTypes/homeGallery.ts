import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeGallery",
  title: "Home Gallery",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
});