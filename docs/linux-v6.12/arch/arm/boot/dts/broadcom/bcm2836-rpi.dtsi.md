---
sidebar_position: 38
---
# bcm2836-rpi.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm2836-rpi.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
#include "bcm2835-rpi.dtsi"
#include "bcm2835-rpi-common.dtsi"

&vchiq {
	compatible = "brcm,bcm2836-vchiq", "brcm,bcm2835-vchiq";
};

```
