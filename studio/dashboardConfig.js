export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddfbcb363eafda25ac632d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-poyfh8u1',
                  apiId: '048ff20c-c857-4c84-981d-eb139fb8cc2b'
                },
                {
                  buildHookId: '5ddfbcb385e199472f81760c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-32gow3nv',
                  apiId: 'f302944e-3bb9-4e10-8726-e45898667e34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alainbuysse/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-32gow3nv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
