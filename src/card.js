import { component, slot, select, map, mappers, on, when, filter, filters, setState, clearState, toggleState, adjust } from "@lynx-json/jsua-style";
import color from './color';
import elevation from './elevation';
import border from './border';

export default function expansionPanel(options = {}) {
  options.theme = options.theme || "light";

  var innerHTML = `
    <div role="presentation" data-jsua-style-slot="content-wrapper">
      <div data-jsua-style-slot="content" role="presentation"></div>
    </div>
    <div role="presentation" data-jsua-style-slot="footer-wrapper">
      <div data-jsua-style-slot="footer" role="presentation"></div>
      <div data-jsua-style-slot="toggle" role="presentation"><i role="presentation" class="material-icons">keyboard_arrow_down</i></div>
    </div>
  `;

  var maxHeight = 300;

  return [
    component('material-card', innerHTML),
    slot('footer', options.footerMapper),
    elevation.card(),
    el => el.style.display = 'flex',
    el => el.style.flexDirection = 'column',
    el => el.style.alignItems = 'stretch',
    el => el.style.justifyContent = 'space-between',
    el => el.style.borderRadius = '2px',
    map(mappers.slot('footer-wrapper'), [
      el => el.style.flexGrow = 0,
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
    map(mappers.slot('footer'), el => el.style.flexGrow = 1),
    map(mappers.slot('toggle'), [
      el => el.style.display = 'flex',
      el => el.style.alignItems = 'center',
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
      el => el.style.flexGrow = 1,
      el => el.style.display = 'block',
      el => el.style.paddingLeft = '24px',
      el => el.style.paddingRight = '24px',
      el => el.style.transition = 'max-height 175ms ease-in-out',
      el => el.style.overflowY = 'hidden',
      el => el.style.overflowX = 'hidden'
    ]),
    map(mappers.slot('content'), el => el.style.paddingTop = '16px'),
    when('normal', [
      map(mappers.slot('footer-wrapper'), [
        el => el.style.minHeight = '48px'
      ]),
      map(mappers.slot('toggle'), [
        select('i.material-icons', el => el.textContent = "keyboard_arrow_down"),
        el => el.style.display = 'none'
      ]),
      map(mappers.slot('content-wrapper'), [
        el => el.style.maxHeight = `${maxHeight}px`
      ])
    ]),
    when('open', [
      map(mappers.slot('footer-wrapper'), [
        el => el.style.minHeight = '64px'
      ]),
      map(mappers.slot('toggle'), [
        select('i.material-icons', el => el.textContent = "keyboard_arrow_up")
      ]),
      map(mappers.slot('content-wrapper'), [
        el => el.style.maxHeight = `${el.firstElementChild.offsetHeight}px`
      ])
    ]),
    when('overflow', map(mappers.slot('toggle'), el => el.style.display = 'flex')),
    adjust([
      clearState('overflow'),
      filter(el => el.firstElementChild.firstElementChild.offsetHeight > maxHeight, [
        setState('overflow')
      ])
    ]),
    setState('normal')
  ];
}
