---
sidebar_position: 1
---
# clocksource.h

### ファイル情報

- パス: `linux-v6.12/arch/arm64/include/asm/vdso/clocksource.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_VDSOCLOCKSOURCE_H
#define __ASM_VDSOCLOCKSOURCE_H

#define VDSO_ARCH_CLOCKMODES					\
	/* vdso clocksource for both 32 and 64bit tasks */	\
	VDSO_CLOCKMODE_ARCHTIMER,				\
	/* vdso clocksource for 64bit tasks only */		\
	VDSO_CLOCKMODE_ARCHTIMER_NOCOMPAT

#endif

```
