---
sidebar_position: 182
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/signal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __SPARC_SIGNAL_H
#define __SPARC_SIGNAL_H

#ifndef __ASSEMBLY__
#include <linux/personality.h>
#include <linux/types.h>
#endif
#include <uapi/asm/signal.h>

#ifndef __ASSEMBLY__

#define __ARCH_HAS_KA_RESTORER
#define __ARCH_HAS_SA_RESTORER

#endif /* !(__ASSEMBLY__) */
#endif /* !(__SPARC_SIGNAL_H) */

```
