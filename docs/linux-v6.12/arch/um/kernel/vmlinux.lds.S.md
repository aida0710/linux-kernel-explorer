---
sidebar_position: 33
---
# vmlinux.lds.S

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/vmlinux.lds.S`

### コンテンツ

```S
#define RUNTIME_DISCARD_EXIT
KERNEL_STACK_SIZE = 4096 * (1 << CONFIG_KERNEL_STACK_ORDER);

#ifdef CONFIG_LD_SCRIPT_STATIC
#include "uml.lds.S"
#else
#include "dyn.lds.S"
#endif

```
