---
sidebar_position: 7
---
# artpec6-crypto.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/crypto/artpec6-crypto.txt`

### コンテンツ

```txt
Axis crypto engine with PDMA interface.

Required properties:
- compatible : Should be one of the following strings:
	"axis,artpec6-crypto" for the version in the Axis ARTPEC-6 SoC
	"axis,artpec7-crypto" for the version in the Axis ARTPEC-7 SoC.
- reg: Base address and size for the PDMA register area.
- interrupts: Interrupt handle for the PDMA interrupt line.

Example:

crypto@f4264000 {
	compatible = "axis,artpec6-crypto";
	reg = <0xf4264000 0x1000>;
	interrupts = <GIC_SPI 19 IRQ_TYPE_LEVEL_HIGH>;
};

```
