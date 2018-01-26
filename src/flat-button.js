import { map, mappers, when, setState, clearState, on } from '@lynx-json/jsua-style';
import background from './background';
import color from './color';

export default function flatButton(options = {}) {
  options.color = options.color || 'Grey';
  return [
    el => el.style.paddingTop = '6px',
    el => el.style.paddingBottom = '6px',
    el => el.style.outline = 'none',
    el => el.style.cursor = 'pointer',
    el => el.style.minHeight = '36px',
    el => el.style.minWidth = '36px',
    el => el.style.paddingLeft = '16px',
    el => el.style.paddingRight = '16px',
    el => el.style.borderRadius = '2px',
    map(mappers.slot('content'), [
      el => el.style.cursor = 'pointer',
      el => el.style.alignItems = 'center',
      el => el.style.justifyContent = 'center',
      el => el.style.justifyItems = 'center'
    ]),
    when('normal', [
      el => el.style.display = 'inline-flex',
      el => el.style.backgroundColor = 'inherit',
      map(options.labelMapper, [
        el => el.style.fontWeight = 'normal',
        el => el.style.color = 'inherit',
        el => el.style.textDecoration = 'none',
      ])
    ]),
    when('selectable', map(options.labelMapper, [
      el => el.style.fontWeight = 'normal',
      color({ color: options.color, shade: '700' })
    ])),
    when('selected', map(options.labelMapper, [
      el => el.style.color = 'inherit',
      el => el.style.fontWeight = 'bold'
    ])),
    when('focus', [
      background({ backgroundColor: options.color, opacity: 0.12 })
    ]),
    when('pressed', [
      background({ backgroundColor: options.color, opacity: 0.4 })
    ]),
    on('focusin', setState('focus')),
    on('focusout', clearState('focus')),
    on('mousedown', setState('pressed')),
    on('mouseup', clearState('pressed')),
    on('touchstart', setState('pressed')),
    on('touchend', clearState('pressed'))
  ];
}
