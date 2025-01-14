---
sidebar_position: 55
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/arch/xtensa/include/asm/signal.h`

### コンテンツ

```h
/*
 * include/asm-xtensa/signal.h
 *
 * Swiped from SH.
 *
 * This file is subject to the terms and conditions of the GNU General Public
 * License.  See the file "COPYING" in the main directory of this archive
 * for more details.
 *
 * Copyright (C) 2001 - 2005 Tensilica Inc.
 */
#ifndef _XTENSA_SIGNAL_H
#define _XTENSA_SIGNAL_H

#include <uapi/asm/signal.h>

#ifndef __ASSEMBLY__
#define __ARCH_HAS_SA_RESTORER

#include <asm/sigcontext.h>

#endif	/* __ASSEMBLY__ */
#endif	/* _XTENSA_SIGNAL_H */

```
