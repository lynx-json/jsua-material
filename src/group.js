import { map, mappers, filter, adjust } from '@lynx-json/jsua-style';
import view from './view';
import filters from './filters';

export default function group(options = {}) {
  if (options.alignItems === 'start') options.alignItems = 'flex-start';
  if (options.alignItems === 'end') options.alignItems = 'flex-end';

  options.gap = options.gap || '0.25em';
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'flex',
      el => el.style.flexDirection = 'row',
      el => el.style.flexWrap = 'wrap',
      filter(() => options.alignItems, el => el.style.alignItems = options.alignItems),
      map(mappers.children(':not(:last-child)'), el => el.style.marginRight = options.gap),
      adjust(map(mappers.children(filters.shouldHaveStandingLine()), el => el.style.flexBasis = '100%'))
    ])
  ];
}
