---
sidebar_position: 17
---
# sam_secure.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-at91/sam_secure.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2022, Microchip
 */

#ifndef SAM_SECURE_H
#define SAM_SECURE_H

#include <linux/arm-smccc.h>

/* Secure Monitor mode APIs */
#define SAMA5_SMC_SIP_SET_SUSPEND_MODE	0x400
#define SAMA5_SMC_SIP_GET_SUSPEND_MODE	0x401

void __init sam_secure_init(void);
struct arm_smccc_res sam_smccc_call(u32 fn, u32 arg0, u32 arg1);
bool sam_linux_is_optee_available(void);

#endif /* SAM_SECURE_H */

```
