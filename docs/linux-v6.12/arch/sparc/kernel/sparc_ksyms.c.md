---
sidebar_position: 110
---
# sparc_ksyms.c

### ファイル情報

- パス: `linux-v6.12/arch/sparc/kernel/sparc_ksyms.c`

### コンテンツ

```c
/*
 * arch/sparc/kernel/ksyms.c: Sparc specific ksyms support.
 *
 * Copyright (C) 1996 David S. Miller (davem@caip.rutgers.edu)
 * Copyright (C) 1996 Eddie C. Dost (ecd@skynet.be)
 */

#include <linux/init.h>
#include <linux/export.h>

/* This is needed only for drivers/sbus/char/openprom.c */
EXPORT_SYMBOL(saved_command_line);

```
