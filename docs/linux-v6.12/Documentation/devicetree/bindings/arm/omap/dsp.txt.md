---
sidebar_position: 5
---
# dsp.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/omap/dsp.txt`

### コンテンツ

```txt
* TI - DSP (Digital Signal Processor)

TI DSP included in OMAP SoC

Required properties:
- compatible : Should be "ti,omap3-c64" for OMAP3 & 4
- ti,hwmods: "dsp"

Examples:

dsp {
    compatible = "ti,omap3-c64";
    ti,hwmods = "dsp";
};

```
