---
sidebar_position: 19
---
# bootconfig-data.S

### ファイル情報

- パス: `linux-v6.12/lib/bootconfig-data.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Embed default bootconfig in the kernel.
 */
	.section .init.rodata, "aw"
	.global embedded_bootconfig_data
embedded_bootconfig_data:
	.incbin "lib/default.bconf"
	.global embedded_bootconfig_data_end
embedded_bootconfig_data_end:

```
