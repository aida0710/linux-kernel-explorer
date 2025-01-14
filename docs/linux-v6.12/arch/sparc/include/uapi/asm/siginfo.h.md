---
sidebar_position: 32
---
# siginfo.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/uapi/asm/siginfo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _UAPI__SPARC_SIGINFO_H
#define _UAPI__SPARC_SIGINFO_H

#if defined(__sparc__) && defined(__arch64__)

#define __ARCH_SI_BAND_T int

#endif /* defined(__sparc__) && defined(__arch64__) */

#include <asm-generic/siginfo.h>


#define SI_NOINFO	32767		/* no information in siginfo_t */

#endif /* _UAPI__SPARC_SIGINFO_H */

```
