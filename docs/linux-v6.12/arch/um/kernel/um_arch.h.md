---
sidebar_position: 32
---
# um_arch.h

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/um_arch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#ifndef __UML_ARCH_H__
#define __UML_ARCH_H__

extern void * __init uml_load_file(const char *filename, unsigned long long *size);

#ifdef CONFIG_OF
extern void __init uml_dtb_init(void);
#else
static inline void uml_dtb_init(void) { }
#endif

extern int __init read_initrd(void);

#endif

```
