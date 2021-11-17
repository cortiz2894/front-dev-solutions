// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const timeline = [
  {
    username: 'cortiz2894',
    name: 'Christian Daniel Ortiz',
    avatar: 'https://avatars.githubusercontent.com/u/45889252?v=4',
    title: 'Carousel React Responsive',
    message: 'Sed pretium odio sed justo posuere convallis. Sed ut sapien quis diam pellentesque tincidunt nec vel ipsum.',
    tags: ['css', 'js', 'react']
  },
  {
    username: 'user2',
    name: 'Nicolas Pere',
    avatar: 'https://avatars.githubusercontent.com/u/45879252?v=4',
    title: 'Flexbox best practices',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate enim ac lobortis pretium. ',
    tags: ['css', 'html']

  },
]
// export default function(req, res) {
//   res.statusCode = 200
//   res.setHeader("Content-Type", "aplication/json")
//   res.send(JSON.stringify(timeline))
// }
export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "aplication/json")
  res.json(timeline)
}
