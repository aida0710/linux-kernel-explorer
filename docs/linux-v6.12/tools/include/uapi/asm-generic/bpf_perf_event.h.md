---
sidebar_position: 2
---
# bpf_perf_event.h

### ファイル情報

- パス: `linux-v6.12/tools/include/uapi/asm-generic/bpf_perf_event.h`

### コンテンツ

```h
#ifndef _UAPI__ASM_GENERIC_BPF_PERF_EVENT_H__
#define _UAPI__ASM_GENERIC_BPF_PERF_EVENT_H__

#include <linux/ptrace.h>

/* Export kernel pt_regs structure */
typedef struct pt_regs bpf_user_pt_regs_t;

#endif /* _UAPI__ASM_GENERIC_BPF_PERF_EVENT_H__ */

```
