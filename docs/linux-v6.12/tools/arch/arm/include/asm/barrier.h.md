---
sidebar_position: 1
---
# barrier.h

### ファイル情報

- パス: `linux-v6.12/tools/arch/arm/include/asm/barrier.h`

### コンテンツ

```h
#ifndef _TOOLS_LINUX_ASM_ARM_BARRIER_H
#define _TOOLS_LINUX_ASM_ARM_BARRIER_H

/*
 * Use the __kuser_memory_barrier helper in the CPU helper page. See
 * arch/arm/kernel/entry-armv.S in the kernel source for details.
 */
#define mb()		((void(*)(void))0xffff0fa0)()
#define wmb()		((void(*)(void))0xffff0fa0)()
#define rmb()		((void(*)(void))0xffff0fa0)()

#endif /* _TOOLS_LINUX_ASM_ARM_BARRIER_H */

```
