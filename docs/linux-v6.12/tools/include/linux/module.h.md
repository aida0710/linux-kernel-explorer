---
sidebar_position: 45
---
# module.h

### ファイル情報

- パス: `linux-v6.12/tools/include/linux/module.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LIBLOCKDEP_LINUX_MODULE_H_
#define _LIBLOCKDEP_LINUX_MODULE_H_

#define module_param(name, type, perm)

static inline bool __is_module_percpu_address(unsigned long addr, unsigned long *can_addr)
{
	return false;
}

#endif

```
