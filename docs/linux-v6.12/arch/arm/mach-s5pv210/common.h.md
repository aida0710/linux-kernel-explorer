---
sidebar_position: 1
---
# common.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-s5pv210/common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (c) 2011 Samsung Electronics Co., Ltd.
 *		http://www.samsung.com
 *
 * Common Header for S5PV210 machines
 */

#ifndef __ARCH_ARM_MACH_S5PV210_COMMON_H
#define __ARCH_ARM_MACH_S5PV210_COMMON_H

#ifdef CONFIG_PM_SLEEP
void s5pv210_cpu_resume(void);
void s5pv210_pm_init(void);
#else
static inline void s5pv210_pm_init(void) {}
#endif

#endif /* __ARCH_ARM_MACH_S5PV210_COMMON_H */

```
