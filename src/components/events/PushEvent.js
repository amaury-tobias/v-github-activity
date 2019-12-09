import { fromNow, branch, hash } from '../../utils/FormatTools'

export default {
  name: 'PushEvent',
  functional: true,
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  render(h, context) {
    const event = context.props.event

    return h(
      'div',
      {
        staticClass: 'github-event',
        style: 'padding-bottom: 0.5em !important;'
      },
      [
        h(
          'svg',
          {
            staticClass: 'event-octicon',
            attrs: {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '16',
              height: '16',
              viewBox: '0 0 12 16'
            }
          },
          [
            h('path', {
              attrs: {
                'fill-rule': 'evenodd',
                d:
                  'M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
              }
            })
          ]
        ),
        h(
          'div',
          {
            style: 'display: inline-block;',
            staticClass: 'event-text'
          },
          [
            h('a', {
              domProps: {
                innerText: event.actor.login
              },
              style: 'text-transform: capitalize;'
            }),
            h('b', { domProps: { innerText: ' pushed to ' } }),
            h('a', {
              staticClass: 'event-link',
              attrs: {
                href: `https://github.com/${event.repo.name}/tree/${branch(
                  event.payload.ref
                )}`,
                target: '_blank'
              },
              domProps: {
                innerText: branch(event.payload.ref)
              }
            }),
            h('span', ' at '),
            h('a', {
              staticClass: 'event-link',
              attrs: {
                href: `https://github.com/${event.repo.name}`,
                target: '_blank'
              },
              domProps: {
                innerText: event.repo.name
              }
            })
          ]
        ),
        h('div', {
          staticClass: 'event-time',
          domProps: {
            innerText: fromNow(event.created_at)
          }
        }),
        h('ul', context.props, [
          event.payload.commits.map(commit =>
            h(
              'li',
              {
                key: commit.sha,
                staticClass: 'event-text event-detail',
                style: 'list-style:none;'
              },
              [
                h('a', {
                  staticClass: 'event-link',
                  attrs: {
                    href: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                    target: '_blank'
                  },
                  domProps: {
                    innerText: `${hash(commit.sha)} `
                  }
                }),
                h('span', commit.message)
              ]
            )
          )
        ])
      ]
    )
  }
}
