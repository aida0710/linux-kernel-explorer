---
sidebar_position: 34
---
# systable.c

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/efi/libstub/systable.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/efi.h>
#include <asm/efi.h>

#include "efistub.h"

const efi_system_table_t *efi_system_table;

```
