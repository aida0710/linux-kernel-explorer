---
sidebar_position: 90
---
# kunit_clk_fixed_rate_test.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/clk/kunit_clk_fixed_rate_test.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

#include "clk-fixed-rate_test.h"

&{/} {
	fixed_50MHz: kunit-clock {
		compatible = "fixed-clock";
		#clock-cells = <0>;
		clock-frequency = <TEST_FIXED_FREQUENCY>;
		clock-accuracy = <TEST_FIXED_ACCURACY>;
	};

	kunit-clock-consumer {
		compatible = "test,single-clk-consumer";
		clocks = <&fixed_50MHz>;
	};
};

```
