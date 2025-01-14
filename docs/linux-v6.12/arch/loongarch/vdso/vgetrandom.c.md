---
sidebar_position: 10
---
# vgetrandom.c

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/vdso/vgetrandom.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2024 Xi Ruoyao <xry111@xry111.site>. All Rights Reserved.
 */
#include <linux/types.h>

ssize_t __vdso_getrandom(void *buffer, size_t len, unsigned int flags, void *opaque_state, size_t opaque_len)
{
	return __cvdso_getrandom(buffer, len, flags, opaque_state, opaque_len);
}

```
