import { select, when, on, setState, clearState, component, map, mappers, toggleState } from '@lynx-json/jsua-style';
import border from './border';
import text from './text';
import color from './color';

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

textInput.password = function (options = {}) {
  var innerHTML = `
    <div data-jsua-style-slot="content" role="presentation"></div>
    <div data-jsua-style-slot="toggle" role="presentation"><i role="presentation" class="material-icons">visibility_off</i></div>
  `;

  return [
    component('material-password-input', innerHTML),
    textInput(options),
    map(mappers.slot('content'), [
      el => el.style.flexGrow = 1,
      el => el.style.display = 'flex',
      el => el.style.flexDirection = 'column',
      el => el.style.alignItems = 'stretch'
    ]),
    map(mappers.slot('toggle'), [
      el => el.style.flexGrow = 0,
      el => el.style.cursor = 'default',
      color({ color: options.color, opacity: 0.38, theme: options.theme }),
      on('mousedown', [
        map(mappers.component(), [
          function toggleVisibility(el) {
            if (el.jsuaStyleHasState('visibility', 'concealed')) {
              el.jsuaStyleSetState('visibility', 'revealed');
            } else {
              el.jsuaStyleSetState('visibility', 'concealed');
            }
          },
          select('input', el => setTimeout(() => el.focus(), 10))
        ])
      ])
    ]),
    on('focusout', function (el) {
      var input = el.querySelector('input');
      setTimeout(function () {
        if (document.activeElement && document.activeElement !== input) {
          setState('visibility', 'concealed')(el);
        }
      }, 10);
    }),
    when('visibility', 'revealed', [
      select('input', el => el.type = 'text'),
      select('i.material-icons', el => el.textContent = "visibility")
    ]),
    when('visibility', 'concealed', [
      select('input', el => el.type = 'password'),
      select('i.material-icons', el => el.textContent = "visibility_off")
    ]),
    el => el.style.flexDirection = 'row'
  ];
};
