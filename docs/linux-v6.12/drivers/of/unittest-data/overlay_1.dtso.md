---
sidebar_position: 4
---
# overlay_1.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_1.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_1 - disable using absolute target path */

&{/testcase-data/overlay-node/test-bus/test-unittest1} {
	status = "disabled";
};

```
