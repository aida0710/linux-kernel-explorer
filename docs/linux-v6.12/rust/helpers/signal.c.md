---
sidebar_position: 12
---
# signal.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/signal.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/export.h>
#include <linux/sched/signal.h>

int rust_helper_signal_pending(struct task_struct *t)
{
	return signal_pending(t);
}

```
