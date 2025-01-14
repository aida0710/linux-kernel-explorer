---
sidebar_position: 4
---
# mpc512x.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/512x/mpc512x.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (C) 2007 Freescale Semiconductor, Inc. All rights reserved.
 *
 * Prototypes for MPC512x shared code
 */

#ifndef __MPC512X_H__
#define __MPC512X_H__
extern void __init mpc512x_init_IRQ(void);
extern void __init mpc512x_init_early(void);
extern void __init mpc512x_init(void);
extern void __init mpc512x_setup_arch(void);
extern int __init mpc5121_clk_init(void);
const char *__init mpc512x_select_psc_compat(void);
extern void __noreturn mpc512x_restart(char *cmd);

#endif				/* __MPC512X_H__ */

```
