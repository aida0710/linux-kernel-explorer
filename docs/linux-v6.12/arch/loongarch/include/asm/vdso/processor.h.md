---
sidebar_position: 4
---
# processor.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/vdso/processor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef __ASM_VDSO_PROCESSOR_H
#define __ASM_VDSO_PROCESSOR_H

#ifndef __ASSEMBLY__

#define cpu_relax()	barrier()

#endif /* __ASSEMBLY__ */

#endif /* __ASM_VDSO_PROCESSOR_H */

```
