---
sidebar_position: 15
---
# xmon_bpts.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/xmon/xmon_bpts.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef XMON_BPTS_H
#define XMON_BPTS_H

#define NBPTS	256
#ifndef __ASSEMBLY__
#include <asm/inst.h>
#define BPT_SIZE	(sizeof(ppc_inst_t) * 2)
#define BPT_WORDS	(BPT_SIZE / sizeof(ppc_inst_t))

extern unsigned int bpt_table[NBPTS * BPT_WORDS];
#endif /* __ASSEMBLY__ */

#endif /* XMON_BPTS_H */

```
