---
sidebar_position: 20
---
# xe_test_mod.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/tests/xe_test_mod.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright © 2023 Intel Corporation
 */
#include <linux/module.h>

MODULE_AUTHOR("Intel Corporation");
MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("xe kunit tests");
MODULE_IMPORT_NS(EXPORTED_FOR_KUNIT_TESTING);

```
