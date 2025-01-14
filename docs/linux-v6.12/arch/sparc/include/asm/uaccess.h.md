---
sidebar_position: 229
---
# uaccess.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/uaccess.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_UACCESS_H
#define ___ASM_SPARC_UACCESS_H

#include <asm/extable.h>

#if defined(__sparc__) && defined(__arch64__)
#include <asm/uaccess_64.h>
#else
#include <asm/uaccess_32.h>
#endif

long strncpy_from_user(char *dest, const char __user *src, long count);

#endif

```
