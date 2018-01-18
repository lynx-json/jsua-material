import { adjust, map, filter, mappers } from '@lynx-json/jsua-style';
import filters from './filters';

export default function padding(value) {
  return [
    el => el.style.padding = value,
    adjust([
      map(mappers.realChildren(filters.shouldNegateContainerPadding()), [
        el => el.style.marginLeft = `-${value}`,
        el => el.style.marginRight = `-${value}`,
        filter(':first-child', el => el.style.marginTop = `-${value}`),
        filter(':last-child', el => el.style.marginBottom = `-${value}`)
      ])
    ])
  ];
}
