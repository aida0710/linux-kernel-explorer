---
sidebar_position: 15
---
# harddog_user_exp.c

### ファイル情報

- パス: `linux-v6.12/arch/um/drivers/harddog_user_exp.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/export.h>
#include "harddog.h"

#if IS_MODULE(CONFIG_UML_WATCHDOG)
EXPORT_SYMBOL(start_watchdog);
EXPORT_SYMBOL(stop_watchdog);
EXPORT_SYMBOL(ping_watchdog);
#endif

```
