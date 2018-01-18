import { adjust, map, filter, mappers } from '@lynx-json/jsua-style';
import filters from './filters';

export default function borderRadius(value) {
  return [
    el => el.style.borderRadius = value,
    adjust([
      map(mappers.realChildren(filters.shouldNegateContainerPadding()), [
        filter(':first-child', el => el.style.borderRadius = `${value} 0px`),
        filter(':last-child', el => el.style.borderRadius = `0px ${value}`)
      ])
    ])
  ];
}
