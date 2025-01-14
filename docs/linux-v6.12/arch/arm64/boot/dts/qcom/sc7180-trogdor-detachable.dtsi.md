---
sidebar_position: 237
---
# sc7180-trogdor-detachable.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-detachable.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Trogdor dts fragment for detachables
 *
 * Copyright 2024 Google LLC.
 */

/* This file must be included after sc7180-trogdor.dtsi to modify cros_ec */
&cros_ec {
	keyboard-controller {
		compatible = "google,cros-ec-keyb-switches";
	};
};

```
