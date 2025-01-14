---
sidebar_position: 87
---
# GEN-for-each-reg.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/GEN-for-each-reg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * These are in machine order; things rely on that.
 */
#ifdef CONFIG_64BIT
GEN(rax)
GEN(rcx)
GEN(rdx)
GEN(rbx)
GEN(rsp)
GEN(rbp)
GEN(rsi)
GEN(rdi)
GEN(r8)
GEN(r9)
GEN(r10)
GEN(r11)
GEN(r12)
GEN(r13)
GEN(r14)
GEN(r15)
#else
GEN(eax)
GEN(ecx)
GEN(edx)
GEN(ebx)
GEN(esp)
GEN(ebp)
GEN(esi)
GEN(edi)
#endif

```
