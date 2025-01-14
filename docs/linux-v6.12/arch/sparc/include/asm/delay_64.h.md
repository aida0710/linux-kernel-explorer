---
sidebar_position: 53
---
# delay_64.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/delay_64.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* delay.h: Linux delay routines on sparc64.
 *
 * Copyright (C) 1996, 2004, 2007 David S. Miller (davem@davemloft.net).
 */

#ifndef _SPARC64_DELAY_H
#define _SPARC64_DELAY_H

#ifndef __ASSEMBLY__

void __delay(unsigned long loops);
void udelay(unsigned long usecs);
#define mdelay(n)	udelay((n) * 1000)

#endif /* !__ASSEMBLY__ */

#endif /* _SPARC64_DELAY_H */

```
