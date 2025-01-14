---
sidebar_position: 13
---
# am57xx-commercial-grade.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/am57xx-commercial-grade.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
&cpu_alert0 {
	temperature = <80000>; /* milliCelsius */
};

&cpu_crit {
	temperature = <90000>; /* milliCelsius */
};

&gpu_crit {
	temperature = <90000>; /* milliCelsius */
};

&core_crit {
	temperature = <90000>; /* milliCelsius */
};

&dspeve_crit {
	temperature = <90000>; /* milliCelsius */
};

&iva_crit {
	temperature = <90000>; /* milliCelsius */
};

```
