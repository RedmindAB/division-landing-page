export type ProjectValue = {
  title: string
  body: string
}

export type Initiatives = {
  title: string
  image: string
  body?: string
}

export type Project = {
  conceptName: string
  conceptDescription: string
  heading: string
  body: string
  values: ProjectValue[]
  date: string
  slug: string
  heroVideo?: string
  heroImage?: string
  previewImage?: string
  initiatives?: Initiatives[]
}

export const projects: Project[] = [
  {
    conceptName: 'Stockholm Open',
    heroImage: require('../assets/stockholm-open/hero.png'),
    previewImage: require('../assets/stockholm-open/preview.png'),
    slug: 'stockholm-open',
    date: '2020-05-06',
    conceptDescription:
      'A unifying platform for tennis, sustainability and business.',
    heading: 'Building the future of Swedish Tennis.',
    body: `Using sports as a common ground and catalyst for collaboration and growth. Together we build the future by creating positive change today.
    Stockholm Open is a yearly tennis tournament that has been played since 1969. It is part of the world covering ATP tour, and many of the greatest stars have played in front of full stands here at the Royal Tennis Hall in Stockholm over the years. 

    Our mission has been and continues to be, to further develop this great tennis tournament and take it into the 21st century with an overall update of its engagements and long-term mission and vision. 

    With the great platform that Stockholm Open provides, our goal is to broaden the initiatives and become the obvious platform not only for great tennis and a social event but also for networking, innovation and collaboration, and to use the tournaments engagements as catalysts for conversation around some of the problems the world and our society is facing today. We want to work with building the future for (and of) Swedish tennis – and that needs to be done from several different angles simultaneously. One of our main focuses is that we want to encourage and facilitate the wellbeing of children and the Swedish youth through movement and inclusion.
    
    Together we build the future by creating positive change today.
    `,
    initiatives: [
      {
        title: 'Title',
        image: require('../assets/stockholm-open/img_1.png'),
      },
      {
        title: 'Title',
        image: require('../assets/stockholm-open/img_2.png'),
      },
      {
        title: 'Title',
        image: require('../assets/stockholm-open/img_3.png'),
      },
      {
        title: 'Title',
        image: require('../assets/stockholm-open/img_4.png'),
      },
      {
        title: 'Title',
        image: require('../assets/stockholm-open/img_5.png'),
      },
    ],
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
  {
    conceptName: 'Impact Week',
    heroImage: require('../assets/impact-week/hero.png'),
    previewImage: require('../assets/impact-week/preview.png'),
    slug: 'impact-week',
    date: '2020-05-06',
    conceptDescription:
      'A summit to celebrate Impact entrepreneurs and encourage more people to follow their path.',
    heading:
      'Disrupt. Pause. Inform. Analyze. Take action –> Be part of the solution.',
    body: `Norrsken believes entrepreneurs building rapidly scalable businesses are our best bet to solving the hardest and biggest problems of society, such as poverty, famine, environmental issues, mental health and integration. It is a non-religious, non-partisan, non-profit foundation, founded in 2016 whose mission is to support entrepreneurs in doing just that, solving the world's most difficult problems.

    Norrsken supports entrepreneurs in two ways. The first is through a co-working space for 425 impact entrepreneurs in Stockholm. The second is through a VC fund backed by unicorn founders, which invests in companies with the potential to radically improve the world. The most successful companies of the future are those that combine benefit for customers with benefit for society at large.

    To highlight these entrepreneurs, facilitate their work, broaden their network and encourage more people to follow the same path, Norrsken created "Impact Week". Impact Week is an annual 4-day summit to promote the work of Impact Entrepreneurs, getting relevant target groups to open their eyes to the reality we live in and at the same time understand the opportunity each one of us has, in different ways, to make choices today that can affect the outcome of tomorrow and drive development in a positive direction. A platform for creating fruitful meetings between startup companies, investors and the next generation in the labour market. Together, we are now working to surpass previous years' event to reach out more forcefully to the relevant target groups in 2021 with the main manifesto “Be part of the solution”.`,
    initiatives: [
      {
        title: 'Title',
        image: require('../assets/impact-week/img_1.png'),
      },
      {
        title: 'Title',
        image: require('../assets/impact-week/img_2.png'),
      },
      {
        title: 'Title',
        image: require('../assets/impact-week/img_3.png'),
      },
      {
        title: 'Title',
        image: require('../assets/impact-week/img_4.png'),
      },
      {
        title: 'Title',
        image: require('../assets/impact-week/img_5.png'),
      },
    ],
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
  {
    conceptName: 'Childhood',
    slug: 'childhood',
    date: '2020-05-06',
    conceptDescription:
      'High level description of the project and dont make it too long',
    heading: 'Showcase the ideas, the amibition, maybe include the location',
    body:
      'Elaborate on the partnership and the tools that will be used, maybe discuss what the partner really wanted to achieve, what was driving the project, discuss what venues wasn’t taken, ultimately wrap it up with an explanation what was selected and why',
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
  {
    conceptName: 'Division',
    slug: 'division',
    date: '2020-05-06',
    conceptDescription:
      'High level description of the project and dont make it too long',
    heading: 'Showcase the ideas, the amibition, maybe include the location',
    body:
      'Elaborate on the partnership and the tools that will be used, maybe discuss what the partner really wanted to achieve, what was driving the project, discuss what venues wasn’t taken, ultimately wrap it up with an explanation what was selected and why',
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
  {
    conceptName: 'Swedish Olympic Committe',
    previewImage: require('../assets/sok/preview.png'),
    heroImage: require('../assets/sok/preview.png'),
    heroVideo: require('../assets/sok/hero.mp4'),
    slug: 'swedish-olympic-commitee',
    date: '2020-05-06',
    conceptDescription:
      'Strenghten SOC communication, activations and highlight the values and goals of the Swedish Olympic Committee',
    heading:
      'Lifting the important work of the Swedish Olympic Committee to new levels.',
    body: `The Swedish Olympic Committee, SOC, is a non-profit organization that consists of many different Swedish sports federations that are on the Olympic program. SOC was founded in 1913 with The mission for SOC is to prepare and operate the country´s participation at the Olympic Games and contribute to competitive Olympic teams.

      Based on the basic values of the Olympic movement, SOK will work to:

      ∙  Create more great role models for young people

      ∙  Give athletes possibility to evolve within sports no matter of background, sex or financial position
      
      ∙  Inspire people to evolve within sports

      ∙  Spread the Olympic values; friendship, respect and strive for excellence

      The purpose of the collaboration between DIVISION and SOC is to strengthen SOC's public and digital activations, highlight SOC's goals and values and thus their brand.
      The overall focus for DIVISON spreads from content creation for digital channels and production of public sports modules and activations, to managing, producing content and implementation of e.g. the Olympic Camp for all active members, leaders and partners.`,
    initiatives: [
      {
        title: 'Title',
        image: require('../assets/sok/img_1.png'),
      },
      {
        title: 'Title',
        image: require('../assets/sok/img_2.png'),
      },
      {
        title: 'Title',
        image: require('../assets/sok/img_3.png'),
      },
      {
        title: 'Title',
        image: require('../assets/sok/img_4.png'),
      },
    ],
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
  {
    conceptName: 'Foodstock',
    heroImage: require('../assets/foodstock/hero.png'),
    previewImage: require('../assets/foodstock/hero.png'),
    slug: 'foodstock',
    date: '2020-05-06',
    conceptDescription: 'Scandinavian gastronomy and food craftsmanship',
    heading:
      'Inspiring and educational gastronomy experiences which focus on the core produce and craftsmanship behind a dish.',
    body: `Foodstock is the meeting place for food lovers of all kinds, with several sub-concepts all focusing on providing different target groups experiences and educational moments focusing on food and food crafts in different ways. 
      Foodstock lives for gastronomy and food craftmanship and believes that knowledge about food is a basic prerequisite to take greater responsibility for what you eat. Through an inspiring and educational platform for gastronomy and food crafts, Foodstock wants to make that knowledge available to everyone.
      Foodstocks mission is to constantly develop Scandinavian gastronomy. To share knowledge and inspiration to all who are interested in gastronomy and food crafts, create a sustainable platform for development and conversations about food, to preserve and share knowledge about food crafts, culture and raw produce, and together be a positive and progressive force in everything that concerns our food. 
      The entire world is affected by what we eat. By spreading our views on gastronomy and food crafts, we want to improve the future for us and our planet. Everyone should have full knowledge of the food they have on the plate in front of them.
      `,
    initiatives: [
      {
        title: 'Title',
        image: require('../assets/foodstock/img_1.png'),
      },
      {
        title: 'Title',
        image: require('../assets/foodstock/img_2.png'),
      },
      {
        title: 'Title',
        image: require('../assets/foodstock/img_3.png'),
      },
      {
        title: 'Title',
        image: require('../assets/foodstock/img_4.png'),
      },
      {
        title: 'Title',
        image: require('../assets/foodstock/img_5.png'),
      },
      {
        title: 'Title',
        image: require('../assets/foodstock/img_6.png'),
      },
    ],
    values: [
      {
        title: 'Get offensive',
        body:
          'Explain how we help our partner put their revenue streams at risk with new digital offerings that reshuffle activities and business models',
      },
      {
        title: 'Digitize',
        body:
          'Example of how we can helped partner to overinvest in digital technology relative to competition',
      },
      {
        title: 'Reframe',
        body:
          'How we helped our client to use a wider lens to assess would-be competitors or partners',
      },
      {
        title: 'Reshape demand',
        body:
          'A concrete example of how the Division enriched products and services with information, social content, and connectivity',
      },
      {
        title: 'Overhaul',
        body:
          'How division helped client Rethink and rebuild legacy IT systems and cultural and strategic constraints',
      },
    ],
  },
]
