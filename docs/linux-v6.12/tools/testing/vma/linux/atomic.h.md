---
sidebar_position: 1
---
# atomic.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/vma/linux/atomic.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */

#ifndef _LINUX_ATOMIC_H
#define _LINUX_ATOMIC_H

#define atomic_t int32_t
#define atomic_inc(x) uatomic_inc(x)
#define atomic_read(x) uatomic_read(x)
#define atomic_set(x, y) do {} while (0)
#define U8_MAX UCHAR_MAX

#endif	/* _LINUX_ATOMIC_H */

```
