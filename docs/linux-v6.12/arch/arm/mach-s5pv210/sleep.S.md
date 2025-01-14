---
sidebar_position: 7
---
# sleep.S

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-s5pv210/sleep.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Copyright (c) 2011-2014 Samsung Electronics Co., Ltd.
 *		http://www.samsung.com
 *
 * S5PV210 Sleep Code
 * Based on S3C64XX sleep code by:
 *	Ben Dooks, (c) 2008 Simtec Electronics
 */

#include <linux/linkage.h>

	.text
	.align

	/*
	 * sleep magic, to allow the bootloader to check for an valid
	 * image to resume to. Must be the first word before the
	 * s3c_cpu_resume entry.
	 */

	.word	0x2bedf00d

	/*
	 * s3c_cpu_resume
	 *
	 * resume code entry for bootloader to call
	 */

ENTRY(s5pv210_cpu_resume)
	b	cpu_resume
ENDPROC(s5pv210_cpu_resume)

```
