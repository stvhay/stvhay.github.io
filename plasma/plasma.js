/* jshint esversion: 8 */

// Inspired by Second Reality (Future Crew)
// https://github.com/mtuomi/SecondReality/blob/master/PLZPART/PLZ.C

function startPlasma(canvas, config) {
  /* CORE PLASMA ENGINE */
  let time = 0;
  const ctx = canvas.getContext("2d");
  const PLASMA_CONFIG = config();
  const imgData = ctx.createImageData(canvas.width, canvas.height);
  const { width: w, height: h } = canvas;

  function HSVtoRGB(h, s, v) {
    h /= 60; // Sector 0-5
    s /= 100;
    v /= 100;
    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
    const [r, g, b] =
      i === 0
        ? [v, t, p]
        : i === 1
          ? [q, v, p]
          : i === 2
            ? [p, v, t]
            : i === 3
              ? [p, q, v]
              : i === 4
                ? [t, p, v]
                : [v, p, q];

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
  }
  function render() {
    for (let y = 0; y < h; y++) {
      const isEven = y % 2 === 0;
      const params = isEven
        ? PLASMA_CONFIG.PARAMS.EVEN_LINE
        : PLASMA_CONFIG.PARAMS.ODD_LINE;

      for (let x = 0; x < w; x++) {
        // Apply zoom and phase offset
        const zx = x / PLASMA_CONFIG.ZOOM_FACTOR + params.PHASE_OFFSET;
        const zy = y / PLASMA_CONFIG.ZOOM_FACTOR + params.PHASE_OFFSET;

        // Wave equation components
        const value =
          PLASMA_CONFIG.WAVE_OFFSET +
          PLASMA_CONFIG.WAVE_AMPLITUDE *
            (Math.sin(zx / params.SCALES[0] + time * params.SPEEDS[0]) +
              Math.sin(zy / params.SCALES[1] + time * params.SPEEDS[1]) +
              Math.sin((zx + zy) / params.SCALES[2] + time * 1.5) +
              Math.sin(Math.hypot(zx, zy) / params.SCALES[3] - time * 2));

        const idx = (y * w + x) * 4;

        if (params.COLOR_MODE === "grayscale") {
          // Grayscale conversion
          const gray = Math.min(
            255,
            Math.max(
              0,
              value * params.GRAYSCALE.CONTRAST * params.GRAYSCALE.BRIGHTNESS,
            ),
          );
          rgb = [
            gray * params.GRAYSCALE.RED_COEFF,
            gray * params.GRAYSCALE.GREEN_COEFF,
            gray * params.GRAYSCALE.BLUE_COEFF,
            255,
          ];
        } else if (params.COLOR_MODE === "hsv") {
          // HSV color conversion
          const hue = (value + time * params.HSV.HUE_CYCLE_SPEED * 100) % 360;
          const brightness =
            params.HSV.BRIGHTNESS + Math.sin(time) * params.HSV.BRIGHTNESS_VAR;
          rgb = HSVtoRGB(hue, params.HSV.SATURATION, brightness);
        } else {
          rgb = [0, 0, 0, 255];
        }
        imgData.data.set(rgb, idx);
      }
    }

    ctx.putImageData(imgData, 0, 0);
    time += PLASMA_CONFIG.BASE_SPEED;
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
