---
sidebar_position: 7
---
# asm-prototypes.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/asm-prototypes.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <asm/checksum.h>
#include <asm/page.h>
#include <asm/fpu.h>
#include <asm-generic/asm-prototypes.h>
#include <linux/uaccess.h>
#include <asm/ftrace.h>
#include <asm/mmu_context.h>

extern void clear_page_cpu(void *page);
extern void copy_page_cpu(void *to, void *from);

```
