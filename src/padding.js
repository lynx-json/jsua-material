import { adjust, map, filter, mappers } from '@lynx-json/jsua-style';
import filters from './filters';

export default function padding(value) {
  return [
    el => el.style.padding = value,
    adjust([
      map(mappers.realChildren(filters.shouldNegateContainerPadding(), '[data-lynx-hints~=content]'), [
        el => el.style.marginLeft = `-${value}`,
        el => el.style.marginRight = `-${value}`
      ]),
      map(mappers.first(mappers.realChildren("*", '[data-lynx-hints~=content]')), [
        filter(filters.shouldNegateContainerPadding(), el => el.style.marginTop = `-${value}`)
      ]),
      map(mappers.last(mappers.realChildren("*", '[data-lynx-hints~=content]')), [
        filter(filters.shouldNegateContainerPadding(), el => el.style.marginBottom = `-${value}`)
      ])
    ])
  ];
}
