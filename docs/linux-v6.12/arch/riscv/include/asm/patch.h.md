---
sidebar_position: 89
---
# patch.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/patch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2020 SiFive
 */

#ifndef _ASM_RISCV_PATCH_H
#define _ASM_RISCV_PATCH_H

int patch_insn_write(void *addr, const void *insn, size_t len);
int patch_text_nosync(void *addr, const void *insns, size_t len);
int patch_text_set_nosync(void *addr, u8 c, size_t len);
int patch_text(void *addr, u32 *insns, size_t len);

extern int riscv_patch_in_stop_machine;

#endif /* _ASM_RISCV_PATCH_H */

```
