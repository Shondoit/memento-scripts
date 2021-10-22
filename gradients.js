function lerp(start, end, value) {
  return (1 - value) * start + value * end;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function gradient(color_a, color_b, value) {
  if (color_a instanceof String) {color_a = hexToRgb(color_a)};
  if (color_b instanceof String) {color_b = hexToRgb(color_b)};
  value = clamp(0, 1, value);
  return rgbToHex(
    lerp(color_a.r, color_b.r, value),
    lerp(color_a.g, color_b.g, value),
    lerp(color_a.b, color_b.b, value)
  );
}

function gradient_red_green(value) {
  if (value < 0.5) {
    return gradient("#FF0000", "FFFF00", value * 2);
  } else {
    return gradient("FFFF00", "00FF00", (value - 0.5) * 2);
  }
}

function gradient_grey(color, value) {
  return gradient("#303030", color, value);
}

function gradient_blue_red(value) {
  return gradient("#FF0000", "#0000FF", value);
}

function normalize(min, max, value) {
  return (value - min) / (max - min);
}

function clamp(min, max, value) {
  return (value < min) ? min : (value > max) ? max : value;
}
