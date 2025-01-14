---
sidebar_position: 50
---
# r8a7743-sysc.h

### ファイル情報

- パス: `linux-v6.12/include/dt-bindings/power/r8a7743-sysc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2016 Cogent Embedded Inc.
 */
#ifndef __DT_BINDINGS_POWER_R8A7743_SYSC_H__
#define __DT_BINDINGS_POWER_R8A7743_SYSC_H__

/*
 * These power domain indices match the numbers of the interrupt bits
 * representing the power areas in the various Interrupt Registers
 * (e.g. SYSCISR, Interrupt Status Register)
 */

#define R8A7743_PD_CA15_CPU0		 0
#define R8A7743_PD_CA15_CPU1		 1
#define R8A7743_PD_CA15_SCU		12
#define R8A7743_PD_SGX			20

/* Always-on power area */
#define R8A7743_PD_ALWAYS_ON		32

#endif /* __DT_BINDINGS_POWER_R8A7743_SYSC_H__ */

```
