import { map, mappers, adjust } from '@lynx-json/jsua-style';
import view from './view';
import filters from './filters';

export default function group() {
  return [
    view(),
    map(mappers.slot('material-layout'), [
      el => el.style.display = 'flex',
      el => el.style.flexDirection = 'row',
      el => el.style.flexWrap = 'wrap',
      map(mappers.children(':not(:last-child)'), el => el.style.marginRight = '0.25em'),
      adjust(map(mappers.children(filters.shouldHaveStandingLine()), el => el.style.flexBasis = '100%'))
    ])
  ];
}
