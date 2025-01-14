---
sidebar_position: 11
---
# xe_live_test_mod.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/tests/xe_live_test_mod.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright © 2023 Intel Corporation
 */
#include <linux/module.h>
#include <kunit/test.h>

extern struct kunit_suite xe_bo_test_suite;
extern struct kunit_suite xe_dma_buf_test_suite;
extern struct kunit_suite xe_migrate_test_suite;
extern struct kunit_suite xe_mocs_test_suite;

kunit_test_suite(xe_bo_test_suite);
kunit_test_suite(xe_dma_buf_test_suite);
kunit_test_suite(xe_migrate_test_suite);
kunit_test_suite(xe_mocs_test_suite);

MODULE_AUTHOR("Intel Corporation");
MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("xe live kunit tests");
MODULE_IMPORT_NS(EXPORTED_FOR_KUNIT_TESTING);

```
