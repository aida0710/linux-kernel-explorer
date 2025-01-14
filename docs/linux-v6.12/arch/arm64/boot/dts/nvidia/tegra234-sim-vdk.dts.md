---
sidebar_position: 39
---
# tegra234-sim-vdk.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/nvidia/tegra234-sim-vdk.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "tegra234.dtsi"

/ {
	model = "NVIDIA Tegra234 VDK";
	compatible = "nvidia,tegra234-vdk", "nvidia,tegra234";

	aliases {
		serial0 = &uarta;
	};

	chosen {
		bootargs = "console=ttyS0,115200n8 earlycon=uart8250,mmio32,0x03100000";
		stdout-path = "serial0:115200n8";
	};

	bus@0 {
		serial@3100000 {
			/delete-property/ dmas;
			/delete-property/ dma-names;
			status = "okay";
		};

		mmc@3460000 {
			status = "okay";
			bus-width = <8>;
			non-removable;
		};

		rtc@c2a0000 {
			status = "okay";
		};

		pmc@c360000 {
			nvidia,invert-interrupt;
		};
	};
};

```
