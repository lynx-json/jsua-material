import { map, mappers, filter } from '@lynx-json/jsua-style';
import view from './view';
import standingLine from './standing-line';

export default function header(options = {}) {
  return [
    view(),
    standingLine(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.alignContent = 'center',
      el => el.style.alignItems = 'center',
      el => el.style.gridTemplateColumns = 'repeat(auto-fit, minmax(160px, 1fr))',
      filter(el => el.children.length === 1, el => el.style.gridTemplateColumns = '1fr'),
      filter(el => el.children.length === 2, [
        el => el.style.gridTemplateColumns = 'auto 1fr',
        map(mappers.last(mappers.children()), el => el.style.justifySelf = 'end')
      ]),
      filter(el => el.children.length === 3, [
        el => el.style.gridTemplateColumns = '1fr 2fr 1fr',
        map(mappers.nth(2, mappers.children()), el => el.style.justifySelf = 'center'),
        map(mappers.last(mappers.children()), el => el.style.justifySelf = 'end')
      ])
    ])
  ];
}
