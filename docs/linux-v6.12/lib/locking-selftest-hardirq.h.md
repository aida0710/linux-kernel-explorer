---
sidebar_position: 142
---
# locking-selftest-hardirq.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-hardirq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef IRQ_DISABLE
#undef IRQ_ENABLE
#undef IRQ_ENTER
#undef IRQ_EXIT

#define IRQ_ENABLE		HARDIRQ_ENABLE
#define IRQ_DISABLE		HARDIRQ_DISABLE
#define IRQ_ENTER		HARDIRQ_ENTER
#define IRQ_EXIT		HARDIRQ_EXIT

```
