---
sidebar_position: 3
---
# cxl_core_exports.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/cxl/cxl_core_exports.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright(c) 2022 Intel Corporation. All rights reserved. */

#include "cxl.h"

/* Exporting of cxl_core symbols that are only used by cxl_test */
EXPORT_SYMBOL_NS_GPL(cxl_num_decoders_committed, CXL);

```
