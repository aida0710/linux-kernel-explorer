---
sidebar_position: 15
---
# overlay_12.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_12.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_12 - enable using absolute target path (i2c) */

&{/testcase-data/overlay-node/test-bus/i2c-test-bus/test-unittest12} {
	status = "okay";
};

```
