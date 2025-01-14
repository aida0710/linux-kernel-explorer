---
sidebar_position: 7
---
# mman.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/uapi/asm/mman.h`

### コンテンツ

```h
#include <asm-generic/mman.h>

#define arch_mmap_check(addr, len, flags) \
	(((flags) & MAP_FIXED && (addr) < FIRST_USER_ADDRESS) ? -EINVAL : 0)

```
