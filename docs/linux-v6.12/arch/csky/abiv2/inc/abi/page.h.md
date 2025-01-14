---
sidebar_position: 6
---
# page.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv2/inc/abi/page.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

static inline void clear_user_page(void *addr, unsigned long vaddr,
				   struct page *page)
{
	clear_page(addr);
}

static inline void copy_user_page(void *to, void *from, unsigned long vaddr,
				  struct page *page)
{
	copy_page(to, from);
}

```
