---
sidebar_position: 15
---
# cpumap.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/kernel/cpumap.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _CPUMAP_H
#define _CPUMAP_H

#ifdef CONFIG_SMP
void cpu_map_rebuild(void);
int map_to_cpu(unsigned int index);
#define cpu_map_init() cpu_map_rebuild()
#else
#define cpu_map_init() do {} while (0)
static inline int map_to_cpu(unsigned int index)
{
	return raw_smp_processor_id();
}
#endif

#endif

```
