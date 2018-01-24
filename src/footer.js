import { map, mappers, filter } from '@lynx-json/jsua-style';
import view from './view';
import standingLine from './standing-line';

export default function footer(options = {}) {
  return [
    view(),
    standingLine(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.alignContent = 'center',
      el => el.style.gridTemplateColumns = 'repeat(auto-fit, minmax(160px, 1fr))'
    ])
  ];
}
