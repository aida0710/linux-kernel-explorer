---
sidebar_position: 5
---
# early_serial_console.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/boot/compressed/early_serial_console.c`

### コンテンツ

```c
#include "misc.h"

/* This might be accessed before .bss is cleared, so use .data instead. */
int early_serial_base __section(".data");

#include "../early_serial_console.c"

```
