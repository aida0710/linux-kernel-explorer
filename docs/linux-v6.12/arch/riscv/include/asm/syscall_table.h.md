---
sidebar_position: 118
---
# syscall_table.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/syscall_table.h`

### コンテンツ

```h
#include <asm/bitsperlong.h>

#if __BITS_PER_LONG == 64
#include <asm/syscall_table_64.h>
#else
#include <asm/syscall_table_32.h>
#endif

```
