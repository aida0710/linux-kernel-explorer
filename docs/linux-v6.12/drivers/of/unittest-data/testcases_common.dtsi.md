---
sidebar_position: 40
---
# testcases_common.dtsi

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/testcases_common.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0

/ {
	testcase-data {
		changeset {
			prop-update = "hello";
			prop-remove = "world";

			node-remove {
			};
		};
	};
};

#include "tests-phandle.dtsi"
#include "tests-interrupts.dtsi"
#include "tests-match.dtsi"
#include "tests-address.dtsi"
#include "tests-platform.dtsi"
#include "tests-overlay.dtsi"
#include "tests-lifecycle.dtsi"

```
