---
sidebar_position: 10
---
# copy-unaligned.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/copy-unaligned.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2023 Rivos, Inc.
 */
#ifndef __RISCV_KERNEL_COPY_UNALIGNED_H
#define __RISCV_KERNEL_COPY_UNALIGNED_H

#include <linux/types.h>

void __riscv_copy_words_unaligned(void *dst, const void *src, size_t size);
void __riscv_copy_bytes_unaligned(void *dst, const void *src, size_t size);

#endif /* __RISCV_KERNEL_COPY_UNALIGNED_H */

```
