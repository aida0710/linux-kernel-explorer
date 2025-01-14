---
sidebar_position: 339
---
# sdm630-sony-xperia-ganges-kirin.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sdm630-sony-xperia-ganges-kirin.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2020, Martin Botka
 */

/dts-v1/;

#include "sdm630.dtsi"
#include "sdm630-sony-xperia-nile.dtsi"

/ {
	model = "Sony Xperia 10";
	compatible = "sony,kirin-row", "qcom,sdm630";
	chassis-type = "handset";

	chosen {
		framebuffer@9d400000 {
			reg = <0 0x9d400000 0 (2520 * 1080 * 4)>;
			height = <2520>;
		};
	};
};

/* Reserve a bigger chunk of RAM for the higher-res display */
&cont_splash_mem {
	reg = <0 0x9d400000 0 (2520 * 1080 * 4)>;
};

/* Ganges devices feature a Novatek touchscreen instead. */
/delete-node/ &touchscreen;
/delete-node/ &vreg_l18a_1v8;

```
