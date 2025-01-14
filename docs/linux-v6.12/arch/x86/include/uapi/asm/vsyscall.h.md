---
sidebar_position: 50
---
# vsyscall.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/uapi/asm/vsyscall.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _UAPI_ASM_X86_VSYSCALL_H
#define _UAPI_ASM_X86_VSYSCALL_H

enum vsyscall_num {
	__NR_vgettimeofday,
	__NR_vtime,
	__NR_vgetcpu,
};

#define VSYSCALL_ADDR (-10UL << 20)

#endif /* _UAPI_ASM_X86_VSYSCALL_H */

```
