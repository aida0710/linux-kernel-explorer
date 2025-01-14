---
sidebar_position: 80
---
# pseries-head.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/pseries-head.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include "ppc_asm.h"

	.text

	.globl _zimage_start
_zimage_start:
	FIXUP_ENDIAN
	b _zimage_start_lib

```
