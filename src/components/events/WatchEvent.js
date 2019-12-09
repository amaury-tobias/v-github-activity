import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'WatchEvent',
  functional: true,
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  render(h, context) {
    const props = context.props

    return h('div', { staticClass: 'github-event' }, [
      h(
        'svg',
        {
          staticClass: 'event-octicon',
          attrs: {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            viewBox: '0 0 14 16'
          }
        },
        [
          h('path', {
            attrs: {
              'fill-rule': 'evenodd',
              d:
                'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
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
              innerText: props.event.actor.login
            },
            style: 'text-transform: capitalize;'
          }),
          h('b', { domProps: { innerText: ' starred ' } }),
          h('a', {
            staticClass: 'event-link',
            attrs: {
              href: `https://github.com/${props.event.repo.name}`,
              target: '_blank'
            },
            domProps: {
              innerText: props.event.repo.name
            }
          })
        ]
      ),
      h('div', {
        staticClass: 'event-time',
        domProps: {
          innerText: fromNow(props.event.created_at)
        }
      })
    ])
  }
}
