---
sidebar_position: 286
---
# types.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * This file is never included by application software unless
 * explicitly requested (e.g., via linux/types.h) in which case the
 * application is Linux specific so (user-) name space pollution is
 * not a major issue.  However, for interoperability, libraries still
 * need to be careful to avoid a name clashes.
 */
#ifndef _ASM_POWERPC_TYPES_H
#define _ASM_POWERPC_TYPES_H

#include <uapi/asm/types.h>

#ifndef __ASSEMBLY__

typedef __vector128 vector128;

#endif /* __ASSEMBLY__ */

#endif /* _ASM_POWERPC_TYPES_H */

```
