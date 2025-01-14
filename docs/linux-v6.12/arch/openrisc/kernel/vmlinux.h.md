---
sidebar_position: 23
---
# vmlinux.h

### ファイル情報

- パス: `linux-v6.12/arch/openrisc/kernel/vmlinux.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __OPENRISC_VMLINUX_H_
#define __OPENRISC_VMLINUX_H_

#ifdef CONFIG_BLK_DEV_INITRD
extern char __initrd_start, __initrd_end;
#endif

#endif

```
