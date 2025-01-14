---
sidebar_position: 40
---
# unwind.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/asm/unwind.h`

### コンテンツ

```h
#ifndef _ASM_UML_UNWIND_H
#define _ASM_UML_UNWIND_H

static inline void
unwind_module_init(struct module *mod, void *orc_ip, size_t orc_ip_size,
		   void *orc, size_t orc_size) {}

#endif /* _ASM_UML_UNWIND_H */

```
