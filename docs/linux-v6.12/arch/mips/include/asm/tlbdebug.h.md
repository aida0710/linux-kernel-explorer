---
sidebar_position: 169
---
# tlbdebug.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/tlbdebug.h`

### コンテンツ

```h
/*
 * This file is subject to the terms and conditions of the GNU General Public
 * License.  See the file "COPYING" in the main directory of this archive
 * for more details.
 *
 * Copyright (C) 2002 by Ralf Baechle
 */
#ifndef __ASM_TLBDEBUG_H
#define __ASM_TLBDEBUG_H

/*
 * TLB debugging functions:
 */
extern void dump_tlb_regs(void);
extern void dump_tlb_all(void);

#endif /* __ASM_TLBDEBUG_H */

```
