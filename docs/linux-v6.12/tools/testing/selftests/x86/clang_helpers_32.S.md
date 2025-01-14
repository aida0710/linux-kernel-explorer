---
sidebar_position: 5
---
# clang_helpers_32.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/x86/clang_helpers_32.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * 32-bit assembly helpers for asm operations that lack support in both gcc and
 * clang. For example, clang asm does not support segment prefixes.
 */
.global dereference_seg_base
dereference_seg_base:
	mov %fs:(0), %eax
	ret

.section .note.GNU-stack,"",%progbits

```
