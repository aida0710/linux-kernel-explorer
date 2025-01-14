---
sidebar_position: 5
---
# gcw0_proto.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/ingenic/gcw0_proto.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "gcw0.dts"

/ {
	model = "GCW Zero Prototype";
};

&memory {
	/* Prototype has only 256 MiB of RAM */
	reg = <0x0 0x10000000>;
};

```
