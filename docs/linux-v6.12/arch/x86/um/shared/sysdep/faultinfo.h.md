---
sidebar_position: 4
---
# faultinfo.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/shared/sysdep/faultinfo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef __i386__
#include "faultinfo_32.h"
#else
#include "faultinfo_64.h"
#endif

```
