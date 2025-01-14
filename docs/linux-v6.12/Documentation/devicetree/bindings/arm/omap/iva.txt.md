---
sidebar_position: 6
---
# iva.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/omap/iva.txt`

### コンテンツ

```txt
* TI - IVA (Imaging and Video Accelerator) subsystem

The IVA contain various audio, video or imaging HW accelerator
depending of the version.

Required properties:
- compatible : Should be:
  - "ti,ivahd" for OMAP4
  - "ti,iva2.2" for OMAP3
  - "ti,iva2.1" for OMAP2430
  - "ti,iva1" for OMAP2420
- ti,hwmods: "iva"

Examples:

iva {
    compatible = "ti,ivahd", "ti,iva";
    ti,hwmods = "iva";
};

```
