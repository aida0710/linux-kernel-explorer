---
sidebar_position: 15
---
# task.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/task.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/export.h>
#include <linux/sched/task.h>

struct task_struct *rust_helper_get_current(void)
{
	return current;
}

void rust_helper_get_task_struct(struct task_struct *t)
{
	get_task_struct(t);
}

void rust_helper_put_task_struct(struct task_struct *t)
{
	put_task_struct(t);
}

```
