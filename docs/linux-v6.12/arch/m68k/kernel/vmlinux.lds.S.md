---
sidebar_position: 37
---
# vmlinux.lds.S

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/vmlinux.lds.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#if defined(CONFIG_MMU) && !defined(CONFIG_COLDFIRE)
PHDRS
{
  text PT_LOAD FILEHDR PHDRS FLAGS (7);
  data PT_LOAD FLAGS (7);
}
#ifdef CONFIG_SUN3
#include "vmlinux-sun3.lds"
#else
#include "vmlinux-std.lds"
#endif
#else
#include "vmlinux-nommu.lds"
#endif

```
