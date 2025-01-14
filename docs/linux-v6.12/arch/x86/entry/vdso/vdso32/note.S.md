---
sidebar_position: 3
---
# note.S

### ファイル情報

- パス: `linux-v6.12/arch/x86/entry/vdso/vdso32/note.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * This supplies .note.* sections to go into the PT_NOTE inside the vDSO text.
 * Here we can supply some information useful to userland.
 */

#include <linux/build-salt.h>
#include <linux/version.h>
#include <linux/elfnote.h>

/* Ideally this would use UTS_NAME, but using a quoted string here
   doesn't work. Remember to change this when changing the
   kernel's name. */
ELFNOTE_START(Linux, 0, "a")
	.long LINUX_VERSION_CODE
ELFNOTE_END

BUILD_SALT

```
