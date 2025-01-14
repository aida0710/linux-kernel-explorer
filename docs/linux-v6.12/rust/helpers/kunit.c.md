---
sidebar_position: 7
---
# kunit.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/kunit.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <kunit/test-bug.h>
#include <linux/export.h>

struct kunit *rust_helper_kunit_get_current_test(void)
{
	return kunit_get_current_test();
}

```
