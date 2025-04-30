import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'xp5rrygw',   // <-- replace with your real project ID
  dataset: 'production',
  apiVersion: '2024-01-01', // use a fixed date
  useCdn: true,
})