---
sidebar_position: 21
---
# um_malloc.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/shared/um_malloc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2005 Paolo 'Blaisorblade' Giarrusso <blaisorblade@yahoo.it>
 */

#ifndef __UM_MALLOC_H__
#define __UM_MALLOC_H__

#include <generated/asm-offsets.h>

extern void *uml_kmalloc(int size, int flags);
extern void kfree(const void *ptr);

extern void *vmalloc_noprof(unsigned long size);
#define vmalloc(...)		vmalloc_noprof(__VA_ARGS__)
extern void vfree(const void *ptr);

#endif /* __UM_MALLOC_H__ */



```
