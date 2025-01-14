---
sidebar_position: 3
---
# exynos-syscon-restart.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/samsung/exynos-syscon-restart.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
/*
 * Samsung's Exynos SoC syscon reboot/poweroff nodes common definition.
 */

&pmu_system_controller {
	poweroff: syscon-poweroff {
		compatible = "syscon-poweroff";
		regmap = <&pmu_system_controller>;
		offset = <0x330c>; /* PS_HOLD_CONTROL */
		mask = <0x5200>; /* reset value */
	};

	reboot: syscon-reboot {
		compatible = "syscon-reboot";
		regmap = <&pmu_system_controller>;
		offset = <0x0400>; /* SWRESET */
		mask = <0x1>;
	};
};

```
