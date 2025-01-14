---
sidebar_position: 8
---
# mutex.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/mutex.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/export.h>
#include <linux/mutex.h>

void rust_helper_mutex_lock(struct mutex *lock)
{
	mutex_lock(lock);
}

void rust_helper___mutex_init(struct mutex *mutex, const char *name,
			      struct lock_class_key *key)
{
	__mutex_init(mutex, name, key);
}

```
