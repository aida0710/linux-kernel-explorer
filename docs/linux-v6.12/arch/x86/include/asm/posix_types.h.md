---
sidebar_position: 224
---
# posix_types.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/posix_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
# ifdef CONFIG_X86_32
#  include <asm/posix_types_32.h>
# else
#  include <asm/posix_types_64.h>
# endif

```
