---
sidebar_position: 21
---
# trace.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/mm/book3s64/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * This file is for defining trace points and trace related helpers.
 */
#ifdef CONFIG_TRANSPARENT_HUGEPAGE
#include <trace/events/thp.h>
#endif

```
