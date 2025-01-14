---
sidebar_position: 3
---
# note.S

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/vdso/note.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * This supplies .note.* sections to go into the PT_NOTE inside the vDSO text.
 * Here we can supply some information useful to userland.
 */

#include <linux/elfnote.h>
#include <linux/version.h>

ELFNOTE_START(Linux, 0, "a")
	.long LINUX_VERSION_CODE
ELFNOTE_END

```
