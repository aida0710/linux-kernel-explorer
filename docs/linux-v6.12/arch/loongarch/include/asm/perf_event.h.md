---
sidebar_position: 87
---
# perf_event.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/perf_event.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Author: Huacai Chen <chenhuacai@loongson.cn>
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */

#ifndef __LOONGARCH_PERF_EVENT_H__
#define __LOONGARCH_PERF_EVENT_H__

#include <asm/ptrace.h>

#define perf_arch_bpf_user_pt_regs(regs) (struct user_pt_regs *)regs

#define perf_arch_fetch_caller_regs(regs, __ip) { \
	(regs)->csr_era = (__ip); \
	(regs)->regs[3] = (unsigned long) __builtin_frame_address(0); \
}

#endif /* __LOONGARCH_PERF_EVENT_H__ */

```
