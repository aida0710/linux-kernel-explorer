---
sidebar_position: 28
---
# qcom-apq8084-ifc6540.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-apq8084-ifc6540.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
#include "qcom-apq8084.dtsi"
#include "pma8084.dtsi"

/ {
	model = "Qualcomm APQ8084/IFC6540";
	compatible = "qcom,apq8084-sbc", "qcom,apq8084";

	aliases {
		serial0 = &blsp2_uart2;
		usid0 = &pma8084_0;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};

	soc {
		serial@f995e000 {
			status = "okay";
		};
	};
};

&sdhc_1 {
	bus-width = <8>;
	non-removable;
	status = "okay";
};

&sdhc_2 {
	cd-gpios = <&tlmm 122 GPIO_ACTIVE_LOW>;
	bus-width = <4>;
};

```
