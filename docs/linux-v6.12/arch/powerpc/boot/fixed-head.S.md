---
sidebar_position: 40
---
# fixed-head.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/fixed-head.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
	.text
	.global _zimage_start
_zimage_start:
	b	_zimage_start_lib

```
