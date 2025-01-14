---
sidebar_position: 2
---
# elf.S

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/vdso/elf.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Author: Huacai Chen <chenhuacai@loongson.cn>
 *
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */

#include <asm/vdso/vdso.h>

#include <linux/elfnote.h>
#include <linux/version.h>

ELFNOTE_START(Linux, 0, "a")
	.long LINUX_VERSION_CODE
ELFNOTE_END

```
