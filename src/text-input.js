import { select, when, on, setState, clearState } from '@lynx-json/jsua-style';
import border from './border';
import text from './text';

export default function textInput(options = {}) {
  options.invalidColor = options.invalidColor || 'Red';
  options.focusColor = options.focusColor || 'Grey';

  return [
    el => el.style.display = 'flex',
    el => el.style.flexDirection = 'column',
    el => el.style.alignItems = 'stretch',
    select('input, textarea', [
      text.input(),
      el => el.style.backgroundColor = "inherit",
      el => el.style.outline = "none",
      el => el.style.border = "none",
      el => el.style.paddingBottom = "7px"
    ]),
    when('normal', [
      el => el.style.display = 'flex',
      border.bottom({ theme: options.theme })
    ]),
    when('focus', border.bottom({ color: options.focusColor, width: '2px', opacity: 1 })),
    when('validity', 'invalid', border.bottom({ color: options.invalidColor, opacity: 1 })),
    on('focusin', setState('focus')),
    on('focusout', clearState('focus')),
    when('visibility', 'hidden', el => el.style.display = 'none'),
    setState('normal')
  ]
}
