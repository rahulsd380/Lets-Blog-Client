// data/blogs.ts

import { Blog } from '../types/blog'; // Import your Blog type definition


export const blogs:Blog[] = [
    {
      id: 1,
      title: 'Conquering the Alps: A Journey Through the Heart of Adventure',
      description: 'Explore the breathtaking landscapes of the Alps, filled with thrilling experiences and stunning views.',
      author: 'Emily Carter',
      authorImage: 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'October 1, 2024',
      tags: ['Adventures', 'Thrills'],
      imageUrl: 'https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Discovering the Amazon Rainforest: An Adventure Awaits',
      description: 'Dive into the wild beauty of the Amazon rainforest, home to exotic wildlife and lush landscapes.',
      author: 'Lucas Martinez',
      authorImage: 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'September 15, 2024',
      tags: ['Adventures', 'Thrills'],
      imageUrl: 'https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Sailing the Mediterranean: A Journey Across Blue Waters',
      description: 'Experience the joys of sailing through the Mediterranean, discovering hidden coves and ancient ports.',
      author: 'Olivia Brown',
      authorImage: 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'August 5, 2024',
      tags: ['Adventures'],
      imageUrl: 'https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more blog entries as needed...
  ];
  