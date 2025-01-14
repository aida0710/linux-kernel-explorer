---
sidebar_position: 220
---
# topology.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/topology.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_TOPOLOGY_H
#define ___ASM_SPARC_TOPOLOGY_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/topology_64.h>
#else
#include <asm/topology_32.h>
#endif
#endif

```
