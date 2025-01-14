---
sidebar_position: 27
---
# ti,da850-mstpri.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/bus/ti,da850-mstpri.txt`

### コンテンツ

```txt
* Device tree bindings for Texas Instruments da8xx master peripheral
  priority driver

DA8XX SoCs feature a set of registers allowing to change the priority of all
peripherals classified as masters.

Documentation:
OMAP-L138 (DA850) - http://www.ti.com/lit/ug/spruh82c/spruh82c.pdf

Required properties:

- compatible:		"ti,da850-mstpri" - for da850 based boards
- reg:			offset and length of the mstpri registers

Example for da850-lcdk is shown below.

mstpri {
	compatible = "ti,da850-mstpri";
	reg = <0x14110 0x0c>;
};

```
