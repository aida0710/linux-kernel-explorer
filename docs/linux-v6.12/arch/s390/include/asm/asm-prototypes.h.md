---
sidebar_position: 11
---
# asm-prototypes.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/asm-prototypes.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_S390_PROTOTYPES_H

#include <linux/kvm_host.h>
#include <linux/ftrace.h>
#include <asm/fpu.h>
#include <asm/nospec-branch.h>
#include <asm-generic/asm-prototypes.h>

__int128_t __ashlti3(__int128_t a, int b);
__int128_t __ashrti3(__int128_t a, int b);
__int128_t __lshrti3(__int128_t a, int b);

#endif /* _ASM_S390_PROTOTYPES_H */

```
