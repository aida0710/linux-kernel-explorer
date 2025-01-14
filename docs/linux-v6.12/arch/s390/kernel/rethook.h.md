---
sidebar_position: 70
---
# rethook.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/kernel/rethook.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef __S390_RETHOOK_H
#define __S390_RETHOOK_H

unsigned long arch_rethook_trampoline_callback(struct pt_regs *regs);

#endif

```
