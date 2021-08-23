module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        // Add theme options here
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Ballston Spa Soccer Club',
    name: 'Ballston Spa Soccer Club',
    description:
      'The Ballston Spa Soccer Club (BSSC) is a non-profit organization designed to foster the growth and promotion of youth soccer in the greater Ballston Spa area. The BSSC has the privilege of providing our athletes with the opportunity to build a foundation of respect for, and dedication to, the sport of soccer.',
    address: 'Ballston Spa, NY',
    // email: 'email@example.com',
    // phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/BallstonSpaSoccerClub/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Tryouts & Player Evaluations',
        slug: '/tryouts-and-player-evaluations'
      },
      {
        name: 'Programs',
        slug: '/programs'
      },
      {
        name: 'News',
        slug: '/news'
      },
      {
        name: 'Scholarships',
        slug: '/scholarships'
      },
      {
        name: 'Apparel & Uniforms',
        slug: '/apparel-and-uniforms'
      },
      {
        name: 'Where are they now?',
        slug: '/where-are-they-now'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
