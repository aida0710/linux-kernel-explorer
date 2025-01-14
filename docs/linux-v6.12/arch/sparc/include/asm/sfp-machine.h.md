---
sidebar_position: 175
---
# sfp-machine.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/sfp-machine.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_SFP_MACHINE_H
#define ___ASM_SPARC_SFP_MACHINE_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/sfp-machine_64.h>
#else
#include <asm/sfp-machine_32.h>
#endif
#endif

```
