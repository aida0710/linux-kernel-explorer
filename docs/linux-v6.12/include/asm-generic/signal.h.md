---
sidebar_position: 100
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/signal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_GENERIC_SIGNAL_H
#define __ASM_GENERIC_SIGNAL_H

#include <uapi/asm-generic/signal.h>

#ifndef __ASSEMBLY__

#include <asm/sigcontext.h>
#undef __HAVE_ARCH_SIG_BITOPS

#endif /* __ASSEMBLY__ */
#endif /* _ASM_GENERIC_SIGNAL_H */

```
