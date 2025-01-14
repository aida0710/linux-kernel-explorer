---
sidebar_position: 75
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/asm/signal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_PARISC_SIGNAL_H
#define _ASM_PARISC_SIGNAL_H

#include <uapi/asm/signal.h>

# ifndef __ASSEMBLY__

/* Most things should be clean enough to redefine this at will, if care
   is taken to make libc match.  */

#include <asm/sigcontext.h>

#endif /* !__ASSEMBLY */
#endif /* _ASM_PARISC_SIGNAL_H */

```
