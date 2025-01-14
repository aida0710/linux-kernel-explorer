---
sidebar_position: 16
---
# overlay_13.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_13.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_13 - disable using absolute target path (i2c) */

&{/testcase-data/overlay-node/test-bus/i2c-test-bus/test-unittest13} {
	status = "disabled";
};

```
