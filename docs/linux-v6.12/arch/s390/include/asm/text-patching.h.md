---
sidebar_position: 149
---
# text-patching.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/text-patching.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef _ASM_S390_TEXT_PATCHING_H
#define _ASM_S390_TEXT_PATCHING_H

#include <asm/barrier.h>

static __always_inline void sync_core(void)
{
	bcr_serialize();
}

void text_poke_sync(void);
void text_poke_sync_lock(void);

#endif /* _ASM_S390_TEXT_PATCHING_H */

```
