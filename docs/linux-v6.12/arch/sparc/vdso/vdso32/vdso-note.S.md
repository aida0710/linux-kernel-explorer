---
sidebar_position: 3
---
# vdso-note.S

### ファイル情報

- パス: `linux-v6.12/arch/sparc/vdso/vdso32/vdso-note.S`

### コンテンツ

```S
/*
 * This supplies .note.* sections to go into the PT_NOTE inside the vDSO
 * text. Here we can supply some information useful to userland.
 */

#include <linux/uts.h>
#include <linux/version.h>
#include <linux/elfnote.h>

ELFNOTE_START(Linux, 0, "a")
	.long	LINUX_VERSION_CODE
ELFNOTE_END

```
