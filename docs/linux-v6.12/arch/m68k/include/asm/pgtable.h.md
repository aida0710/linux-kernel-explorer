---
sidebar_position: 128
---
# pgtable.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/pgtable.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __M68K_PGTABLE_H
#define __M68K_PGTABLE_H

#include <asm/page.h>

#ifdef __uClinux__
#include <asm/pgtable_no.h>
#else
#include <asm/pgtable_mm.h>
#endif

#ifndef __ASSEMBLY__
extern void paging_init(void);
#endif

#endif /* __M68K_PGTABLE_H */

```
