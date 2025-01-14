---
sidebar_position: 1
---
# oppanel-opal.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/powerpc/opal/oppanel-opal.txt`

### コンテンツ

```txt
IBM OPAL Operator Panel Binding
-------------------------------

Required properties:
- compatible : Should be "ibm,opal-oppanel".
- #lines     : Number of lines on the operator panel e.g. <0x2>.
- #length    : Number of characters per line of the operator panel e.g. <0x10>.

Example:
	oppanel {
		compatible = "ibm,opal-oppanel";
		#lines = <0x2>;
		#length = <0x10>;
	};

```
