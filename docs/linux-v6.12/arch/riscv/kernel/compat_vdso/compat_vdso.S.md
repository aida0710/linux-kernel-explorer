---
sidebar_position: 3
---
# compat_vdso.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/compat_vdso/compat_vdso.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */

#define	vdso_start	compat_vdso_start
#define	vdso_end	compat_vdso_end

#define	__VDSO_PATH	"arch/riscv/kernel/compat_vdso/compat_vdso.so"

#include "../vdso/vdso.S"

```
