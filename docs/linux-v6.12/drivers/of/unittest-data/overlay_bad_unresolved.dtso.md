---
sidebar_position: 27
---
# overlay_bad_unresolved.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_bad_unresolved.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&this_label_does_not_exist {
	status = "okay";
};

```
