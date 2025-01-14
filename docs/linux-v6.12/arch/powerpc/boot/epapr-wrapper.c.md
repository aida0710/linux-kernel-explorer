---
sidebar_position: 38
---
# epapr-wrapper.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/epapr-wrapper.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
extern void epapr_platform_init(unsigned long r3, unsigned long r4,
				unsigned long r5, unsigned long r6,
				unsigned long r7);

void platform_init(unsigned long r3, unsigned long r4, unsigned long r5,
		   unsigned long r6, unsigned long r7)
{
	epapr_platform_init(r3, r4, r5, r6, r7);
}

```
