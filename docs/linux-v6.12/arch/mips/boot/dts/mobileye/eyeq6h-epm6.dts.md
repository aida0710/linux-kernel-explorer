---
sidebar_position: 5
---
# eyeq6h-epm6.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/mobileye/eyeq6h-epm6.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
/*
 * Copyright 2024 Mobileye Vision Technologies Ltd.
 */

/dts-v1/;

#include "eyeq6h.dtsi"

/ {
	compatible = "mobileye,eyeq6-epm6", "mobileye,eyeq6";
	model = "Mobile EyeQ6H MP6 Evaluation board";

	chosen {
		stdout-path = "serial0:921600n8";
	};

	memory@0 {
		device_type = "memory";
		reg = <0x1 0x00000000 0x1 0x00000000>;
	};
};

```
