---
sidebar_position: 5
---
# page.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/xen/page.h`

### コンテンツ

```h
#include <xen/arm/page.h>

static inline bool xen_kernel_unmapped_at_usr(void)
{
	return false;
}

```
