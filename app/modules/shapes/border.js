export const borderParams = {
  cellHeight: 15,
  cellWidth: 15,
};

export const getBorderArray = (params) => {
  // LEGEND:
  // [t|r|b|l]  ->  top | right | bottom | left
  const yt = params.cellHeight / 2,
        xr = params.cellWidth / 2,
        yb = -params.cellHeight / 2,
        xl = -params.cellWidth / 2;

  return [
    [xl, yb],
    [xr, yb],
    [xr, yt],
    [xl, yt],
    [xl, yb]
  ];
}
