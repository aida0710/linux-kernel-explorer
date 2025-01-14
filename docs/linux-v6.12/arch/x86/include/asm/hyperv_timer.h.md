---
sidebar_position: 99
---
# hyperv_timer.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/hyperv_timer.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_X86_HYPERV_TIMER_H
#define _ASM_X86_HYPERV_TIMER_H

#include <asm/msr.h>

#define hv_get_raw_timer() rdtsc_ordered()

#endif

```
