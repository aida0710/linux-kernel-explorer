---
sidebar_position: 63
---
# mcs_spinlock.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/mcs_spinlock.h`

### コンテンツ

```h
#ifndef __ASM_MCS_SPINLOCK_H
#define __ASM_MCS_SPINLOCK_H

/*
 * Architectures can define their own:
 *
 *   arch_mcs_spin_lock_contended(l)
 *   arch_mcs_spin_unlock_contended(l)
 *
 * See kernel/locking/mcs_spinlock.c.
 */

#endif /* __ASM_MCS_SPINLOCK_H */

```
