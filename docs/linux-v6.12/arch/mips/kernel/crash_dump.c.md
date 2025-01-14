---
sidebar_position: 20
---
# crash_dump.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/kernel/crash_dump.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/highmem.h>
#include <linux/crash_dump.h>
#include <linux/uio.h>

ssize_t copy_oldmem_page(struct iov_iter *iter, unsigned long pfn,
			 size_t csize, unsigned long offset)
{
	void  *vaddr;

	if (!csize)
		return 0;

	vaddr = kmap_local_pfn(pfn);
	csize = copy_to_iter(vaddr + offset, csize, iter);
	kunmap_local(vaddr);

	return csize;
}

```
