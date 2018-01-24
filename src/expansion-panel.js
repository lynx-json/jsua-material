import { component, slot, select, map, mappers, on, when, filter, filters, setState, clearState, toggleState } from "@lynx-json/jsua-style";
import color from './color';
import elevation from './elevation';
import border from './border';

export default function expansionPanel(options = {}) {
  options.theme = options.theme || "light";

  var innerHTML = `
    <div role="presentation" data-jsua-style-slot="header-wrapper">
      <div data-jsua-style-slot="header" role="presentation"></div>
      <div data-jsua-style-slot="toggle" role="presentation"><i role="presentation" class="material-icons">keyboard_arrow_down</i></div>
    </div>
    <div role="presentation" data-jsua-style-slot="content-wrapper">
      <div data-jsua-style-slot="content" role="presentation"></div>
    </div>
  `;

  return [
    component('material-expansion-panel', innerHTML),
    filter(filters.has(options.headerMapper), slot('header', options.headerMapper)),
    elevation(2),
    el => el.style.display = 'flex',
    el => el.style.flexDirection = 'column',
    el => el.style.alignItems = 'stretch',
    map(mappers.slot('header-wrapper'), [
      el => el.style.cursor = 'default',
      el => el.style.display = 'flex',
      el => el.style.flexDirection = 'row',
      el => el.style.flexWrap = 'nowrap',
      el => el.style.alignItems = 'center',
      el => el.style.paddingLeft = '24px',
      el => el.style.paddingRight = '24px',
      el => el.style.minHeight = '48px',
      el => el.style.transition = 'min-height 175ms ease-in-out',
      on('click', function (el, evt) {
        map(mappers.component(), toggleState('open'))(el);
        evt.stopPropagation();
        evt.preventDefault();
      })
    ]),
    map(mappers.slot('header'), el => el.style.flexGrow = 1),
    map(mappers.slot('toggle'), [
      el => el.style.marginLeft = '16px',
      color({ color: options.color, opacity: 0.38, theme: options.theme }),
      select('i.material-icons', [
        el => el.style.width = '24px',
        el => el.style.height = '24px',
        el => el.style.overflow = 'hidden',
        el => el.style.cursor = 'default',
        el => el.style.borderRadius = '2px',
        when('normal', el => el.style.border = '1px solid transparent'),
        when('hover', border(options)),
        on('mouseenter', setState('hover')),
        on('mouseleave', clearState('hover')),
        setState('normal')
      ])
    ]),
    map(mappers.slot('content-wrapper'), [
      el => el.style.display = 'block',
      el => el.style.paddingLeft = '24px',
      el => el.style.paddingRight = '24px',
      el => el.style.transition = 'max-height 175ms ease-in-out, opacity 175ms ease-in-out',
      el => el.style.overflowY = 'hidden',
      el => el.style.overflowX = 'hidden'
    ]),
    map(mappers.slot('content'), el => el.style.paddingBottom = '16px'),
    when('normal', [
      map(mappers.slot('header-wrapper'), [
        el => el.style.minHeight = '48px'
      ]),
      map(mappers.slot('toggle'), [
        select('i.material-icons', el => el.textContent = "keyboard_arrow_down")
      ]),
      map(mappers.slot('content-wrapper'), [
        el => el.style.maxHeight = '0px',
        el => el.style.opacity = 0
      ])
    ]),
    when('open', [
      map(mappers.slot('header-wrapper'), [
        el => el.style.minHeight = '64px'
      ]),
      map(mappers.slot('toggle'), [
        select('i.material-icons', el => el.textContent = "keyboard_arrow_up")
      ]),
      map(mappers.slot('content-wrapper'), [
        el => el.style.opacity = 1,
        el => el.style.maxHeight = `${el.firstElementChild.offsetHeight}px`
      ])
    ]),
    setState('normal')
  ];
}
