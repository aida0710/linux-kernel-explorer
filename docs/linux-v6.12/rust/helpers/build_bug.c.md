---
sidebar_position: 4
---
# build_bug.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/build_bug.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/export.h>
#include <linux/errname.h>

const char *rust_helper_errname(int err)
{
	return errname(err);
}

```
