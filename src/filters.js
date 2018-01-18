import * as style from '@lynx-json/jsua-style';

export default Object.assign({
  shouldHaveStandingLine: () => el => el.hasAttribute("data-jsua-material-standing-line"),
  shouldNegateContainerPadding: () => el => el.hasAttribute('data-jsua-material-negate-padding')
}, style.filters);
