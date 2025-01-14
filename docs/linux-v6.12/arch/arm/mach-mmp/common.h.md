---
sidebar_position: 3
---
# common.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-mmp/common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/reboot.h>

extern void mmp_timer_init(int irq, unsigned long rate);

extern void __init mmp_map_io(void);
extern void __init mmp2_map_io(void);

```
