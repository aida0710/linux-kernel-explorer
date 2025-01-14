---
sidebar_position: 57
---
# reboot.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/kernel/reboot.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef REBOOT_H
#define REBOOT_H

extern void call_with_stack(void (*fn)(void *), void *arg, void *sp);
extern void _soft_restart(unsigned long addr, bool disable_l2);

#endif

```
